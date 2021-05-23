import { authMe, logining, logout } from "./api";
import { stopSubmit } from 'redux-form';

// Action Type
const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER";

// Action Creator
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })
export const logoutUser = () => ({ type: LOGOUT_USER })
export const authMeThunkCreator = () => (dispatch) => {
	return authMe().then(response => {
		let { login, id, email } = response.data.data;
		if (!response.data.resultCode) dispatch(setAuthUserData(id, email, login));
	})
}

export const loginThunkCreator = ({ email, password, rememberMe }) => (dispatch) => {
	logining(email, password, rememberMe).then(response => {
		console.log(response);
		if (!response.data.resultCode) dispatch(authMeThunkCreator());
		else {
			let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
			dispatch(stopSubmit('login', { _error: errorMessage }));
		}
	})
}

export const logoutProfile = () => (dispatch) => {
	logout().then(response => {
		if (!response.data.resultCode) dispatch(logoutUser());
	});
}

let initialState = {
	id: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false,
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
		default:
			return state;
	}
}

export default authReducer