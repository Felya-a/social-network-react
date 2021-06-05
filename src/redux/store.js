import { dialogsReducer } from "./dialogsReducer.js";
import { profileReducer } from "./profileReducer.js";
// import { sidebarReducer } from "./sidebarReducer.js";


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, textPost: "Hi, how are you?" },
				{ id: 2, textPost: "It's my first post" },
			],
			newPostText: 'it_kamasutra',
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Alex" },
				{ id: 2, name: "Kristina" },
				{ id: 3, name: "Anasteysha" },
				{ id: 4, name: "Kate" },
				{ id: 5, name: "Victoria" },
			],
			messages: [
				{ id: 1, text: "Lorem, ipsum." },
				{ id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta." },
				{ id: 1, text: "Далеко-далеко за словесными горами в стране, гласных и согласных." },
			],
			newMessageText: 'Message',
		},
		sidebar: {},
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this.getRerender = observer;
	},
	getRerender() {
		// при работе приложения код этой функции переписывается в функции subscribe
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		// this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this.getRerender(this._state);
	}
};

export default store;


// как выглядели mapDispathToProps
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 	  onMessageChenge: (text) => {
// 		dispatch(updateNewMessageText(text))
// 	  },
// 	  sendMessage: () => {
// 		dispatch(sendMessageActionCretor())
// 	  },
// 	}
//   }