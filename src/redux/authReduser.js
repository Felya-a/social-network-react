import { authMe, logining, logout, getCaptcha } from "./api";
import { stopSubmit } from 'redux-form';

// Action Type
const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER";
const SET_URL_CAPTHA = "SET_URL_CAPTHA";

// Action Creator
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const logoutUser = () => ({ type: LOGOUT_USER })
export const setUrlCaptcha = (url) => ({ type: SET_URL_CAPTHA, url })
export const authMeThunkCreator = () => async (dispatch) => {
	let response = await authMe();
	let { login, id, email } = response.data.data;
	if (!response.data.resultCode) dispatch(setAuthUserData(id, email, login));
}

export const loginThunkCreator = ({ email, password, rememberMe, captchaText }) => async (dispatch) => {
	let response = await logining(email, password, rememberMe, captchaText)
	if (response.data.resultCode == 0) dispatch(authMeThunkCreator());
	else {
		if (response.data.resultCode == 10) dispatch(getCaptchaLogin(dispatch));
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
		dispatch(stopSubmit('login', { _error: errorMessage }));
	}
}

export const logoutProfile = () => async (dispatch) => {
	let response = await logout()
	if (!response.data.resultCode) dispatch(logoutUser());
}
export const getCaptchaLogin = () => async (dispatch) => {
	let response = await getCaptcha()
	console.log(response);
	if (response.data.url) dispatch(setUrlCaptcha(response.data.url))
}

let initialState = {
	id: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false,
	urlCaptcha: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
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