import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';
import usersReducer from './usersReduser.js';
import authReducer from './authReduser.js';
import footerReducer from './footerReducer.js';
import thunkMiddleware from 'redux-thunk'; // то что мы импортируем не является thunk. Thunk это функция, это другое
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer.js';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    footer: footerReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;