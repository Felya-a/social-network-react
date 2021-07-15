import { authMe, logining, logout, getCaptcha } from "./api";
import { stopSubmit } from 'redux-form';

// Action Type
const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER";
const SET_URL_CAPTHA = "SET_URL_CAPTHA";

// Action Creator
type SetAuthUserDataActionPayloadType = {
	id: number
	email: string
	login: string
}
type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA
	data: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (id: number, email: string, login: string): SetAuthUserDataActionType => ({ type: SET_USER_DATA, data: { id, email, login } })
export const logoutUser = () => ({ type: LOGOUT_USER })
type SetUrlCaptchaType = {
	type: typeof SET_URL_CAPTHA
	url: string
}
export const setUrlCaptcha = (url: string): SetUrlCaptchaType => ({ type: SET_URL_CAPTHA, url })

// Thunk Creator
export const authMeThunkCreator = () => async (dispatch: any) => {
	let response = await authMe();
	let { login, id, email } = response.data.data;
	if (!response.data.resultCode) dispatch(setAuthUserData(id, email, login));
}

export const loginThunkCreator = ({ email, password, rememberMe, captchaText }: any) => async (dispatch: any) => {
	let response = await logining(email, password, rememberMe, captchaText)
	if (response.data.resultCode === 0) dispatch(authMeThunkCreator());
	else {
		if (response.data.resultCode === 10) dispatch(getCaptchaLogin());
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: errorMessage }));
	}
}

export const logoutProfile = () => async (dispatch: any) => {
	let response = await logout()
	if (!response.data.resultCode) dispatch(logoutUser());
}

export const getCaptchaLogin = () => async (dispatch: any) => {
	let response = await getCaptcha()
	if (response.data.url) dispatch(setUrlCaptcha(response.data.url))
}

export type InitialStateType2 = {
	id: number | null,
	login: string | null,
	email: string | null,
	isFetching: boolean | false,
	isAuth: boolean | false,
	urlCaptcha: string | null,
}

let initialState = {
	id: null as number | null,
	login: null as string | null,
	email: null as string | null,
	isFetching: false as boolean | false,
	isAuth: false as boolean | false,
	urlCaptcha: null as string | null,
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType2 => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				idd: 'hihihi',
				isAuth: true,
			}
		case LOGOUT_USER:
			return {
				...state,
				isAuth: false,
			}
		case SET_URL_CAPTHA:
			return {
				...state,
				urlCaptcha: action.url,
			}
		default:
			return state;
	}
}

export default authReducer