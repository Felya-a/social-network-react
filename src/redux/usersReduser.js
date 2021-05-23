import { getUsers, followPost, followDelete } from "./api";

// Action Type
const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHENGE_CURRENT_PAGE = "CHENGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"; // Preloader перез загрузкой списка юзеров
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"; // disable button follow

// Action Creator
export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const chengeCurrentPage = (newCurrentPage) => ({ type: CHENGE_CURRENT_PAGE, newCurrentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

export const getUsersThunkCreator = (currentPage, pageSize) => { // замыкание, ф-я высшего порядка

	return (dispatch) => {
		dispatch(chengeCurrentPage(currentPage))
		dispatch(toggleIsFetching(true));
		getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		})
	}
}

export const followThunkCreator = (userID) => (dispatch) => { // замыкание, ф-я высшего порядка
	dispatch(toggleFollowingProgress(true, userID));
	followPost(userID).then(response => {
		if (response.data.resultCode == 0){
			dispatch(follow(userID))
		}
		dispatch(toggleFollowingProgress(false, userID));
	})
}

export const unfollowThunkCreator = (userID) => (dispatch) => { // замыкание, ф-я высшего порядка
	dispatch(toggleFollowingProgress(true, userID));
	followDelete(userID).then(response => {
		if (response.data.resultCode == 0){
			dispatch(unfollow(userID))
		}
		dispatch(toggleFollowingProgress(false, userID));
	})
}


let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 24,
	currentPage: 1,
	isFetching: false,
	followingIsProgress: [],
}

const usersReducer = (state = initialState, action) => {
	window.state = state;
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(item => (item.id == action.userID) ? { ...item, followed: true } : item)
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(item => (item.id == action.userID) ? { ...item, followed: false } : item)
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
				// users: [...state.users, ...action.users],
			}
		case CHENGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.newCurrentPage,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				// totalUsersCount: action.totalCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingIsProgress: action.isFetching
					? [...state.followingIsProgress, action.userID]
					: state.followingIsProgress.filter(id => id != action.userID),
			}
		default:
			return state;

	}

}

export default usersReducer