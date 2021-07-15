import { stopSubmit } from "redux-form";
import { getProfile, getStatus, updateStatus, savePhoto, setMeDataProfile } from "./api";

// Action Type
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

// Action Creator
type AddPostActionCreatorType = {
	type: typeof ADD_POST
	postText: string
}
export const addPostActionCreator = (postText: string): AddPostActionCreatorType => ({ type: ADD_POST, postText })
type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
type SetStatusType = {
	type: typeof SET_STATUS
	status: string
}
export const setStatus = (status: string) => ({ type: SET_STATUS, status })
type SavePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (photos: any): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const setStatusThunkCreator = (status: any) => async (dispatch: any) => {
	try {
		let response = await updateStatus(status)
		if (response.data.resultCode === 0) dispatch(setStatus(status));
	} catch (error) {
		alert(error.response.status)
	}
}
export const getStatusThunkCreator = (userID: number) => async (dispatch: any) => {
	let response = await getStatus(userID)
	if (response.status === 200) {
		dispatch(setStatus(response.data));
	}
}
export const getUserProfileThunkCreator = (userID: number) => async (dispatch: any) => {
	let response = await getProfile(userID)
	dispatch(setUserProfile(response.data));
}
export const savePhotoThunkCreator = (photo: any) => async (dispatch: any) => {
	let response = await savePhoto(photo);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}
export const updateDataProfile = (data: any) => async (dispatch: any) => {
	let response = await setMeDataProfile(data);
	if (response.data.resultCode === 0) {
		dispatch(setUserProfile(data))
	} else {
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
		dispatch(stopSubmit("editProfile", { _error: errorMessage }));
		return Promise.reject(errorMessage)
	}
}

type PostType = {
	id: number
	textPost: string
}
type PhotosType = {
	small: string | null
	large: string | null
}
type ProfileType = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	photos: PhotosType
	userId: number
}
type ContactsType = {
	facebook: string
	github: string
	instagram: string
	mainLink: string
	twitter: string
	vk: string
	website: string
	youtube: string
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
	profile: {} as ProfileType,
	posts: [
		{ id: 1, textPost: "Hi, how are you?" },
		{ id: 2, textPost: "It's my first post" },
	] as Array<PostType>,
	newPostText: "it_kamasutra",
	SettingsScore: 0,
	status: "",
}

const profileReducer = (state = initialState, action: any) => {

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