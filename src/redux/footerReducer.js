// Action Type
const SET_TIME = "SET_TIME";

// Action Creator
export const setTimeActionCreator = (time) => ({ type: SET_TIME, time })

let initialState = {
	time: "time",
}

const footerReducer = (state = initialState, action) => {
	console.log('footer REDUCER');
	switch (action.type) {
		case SET_TIME:
			return {
				...state,
				time: action.time,
			}
		default:
			return state;
	}
}

export default footerReducer;