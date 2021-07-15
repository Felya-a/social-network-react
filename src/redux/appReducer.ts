import { authMeThunkCreator } from './authReducer'

// Action Type
const SET_INITIALIZED = "SET_INITIALIZED";

// Action Creator
type setInitializedActionType = {
  type: typeof SET_INITIALIZED
}

export const setInitialized = (): setInitializedActionType => ({ type: SET_INITIALIZED })

// Thunc Creator
export const initializeApp = () => (dispatch: Function) => {
  let promise = dispatch(authMeThunkCreator());
  Promise.all([promise]) // в массиве может быть много промисов
    .then(() => {
      dispatch(setInitialized())
    })
}

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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