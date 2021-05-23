import { authMeThunkCreator } from './authReduser.js'

// Action Type
const SET_INITIALIZED = "SET_INITIALIZED";

// Action Creator
export const setInitialized = () => ({ type: SET_INITIALIZED })
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMeThunkCreator());
  Promise.all([promise]) // в массиве может быть много промисов
    .then(() => {
      dispatch(setInitialized())
    })
}

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

export default appReducer