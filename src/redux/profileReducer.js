import { getProfile, getStatus, updateStatus } from "./api";

// Action Type
const ADD_POST = "ADD_POST";
const SETTINGS_CHANGE_SCORE = "SETTINGS_CHANGE_SCORE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

// Action Creator
export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText })
// временно
export const SettingsChangeScore = () => ({ type: SETTINGS_CHANGE_SCORE, })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setStatusThunkCreator = (status) => (dispatch) => {
	updateStatus(status).then(response => {
		if (response.data.resultCode == 0) dispatch(setStatus(status));
	})
}
export const getStatusThunkCreator = (userID) => (dispatch) => {
	getStatus(userID).then(response => {
		if (response.status == 200) {
			dispatch(setStatus(response.data));
		}
	})
}

export const getUserProfileThunkCreator = (userID) => (dispatch) => {
	getProfile(userID).then(response => {
		dispatch(setUserProfile(response.data));
	})
}

let initialState = {
	profile: null,
	posts: [
		{ id: 1, textPost: "Hi, how are you?" },
		{ id: 2, textPost: "It's my first post" },
	],
	newPostText: 'it_kamasutra',
	SettingsScore: 0,
	status: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				// id: 3,
				textPost: action.postText,
				// likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		case SETTINGS_CHANGE_SCORE:
			return {
				...state,
				SettingsScore: state.SettingsScore + 1,
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		default:
			return state;
	}
}

export default profileReducer