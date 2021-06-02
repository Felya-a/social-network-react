import { stopSubmit } from "redux-form";
import { getProfile, getStatus, updateStatus, savePhoto, setMeDataProfile } from "./api";

// Action Type
const ADD_POST = "ADD_POST";
const SETTINGS_CHANGE_SCORE = "SETTINGS_CHANGE_SCORE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

// Action Creator
export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText })
export const SettingsChangeScore = () => ({ type: SETTINGS_CHANGE_SCORE, })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const setStatusThunkCreator = (status) => async (dispatch) => {
	let response = await updateStatus(status)
	if (response.data.resultCode == 0) dispatch(setStatus(status));
}
export const getStatusThunkCreator = (userID) => async (dispatch) => {
	let response = await getStatus(userID)
	if (response.status == 200) {
		dispatch(setStatus(response.data));
	}
}
export const getUserProfileThunkCreator = (userID) => async (dispatch) => {
	let response = await getProfile(userID)
	dispatch(setUserProfile(response.data));
}
export const savePhotoThunkCreator = (photo) => async (dispatch) => {
	let response = await savePhoto(photo);
	if (response.data.resultCode == 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}
export const updateDataProfile = (data) => async (dispatch) => {
	let response = await setMeDataProfile(data);
	if (response.data.resultCode == 0) {
		dispatch(setUserProfile(data))
	} else {
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
		dispatch(stopSubmit("editProfile", { _error: errorMessage }));
		return Promise.reject(errorMessage)
	}
}


let initialState = {
	// profile: {
	// 	aboutMe: null,
	// 	contacts: {
	// 		facebook: null,
	// 		website: null,
	// 		vk: null,
	// 		twitter: null,
	// 		instagram: null,
	// 		youtube: null,
	// 		github: null,
	// 		mainLink: null,
	// 	},
	// 	lookingForAJob: false,
	// 	lookingForAJobDescription: null,
	// 	fullName: null,
	// 	userId: null,
	// 	photos: {
	// 		small: null,
	// 		large: null,
	// 	}
	// },
	profile: null,
	posts: [
		{ id: 1, textPost: "Hi, how are you?" },
		{ id: 2, textPost: "It's my first post" },
	],
	newPostText: "it_kamasutra",
	SettingsScore: 0,
	status: "",
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
				profile: { ...state.profile, ...action.profile },
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			}
		default:
			return state;
	}
}

export default profileReducer