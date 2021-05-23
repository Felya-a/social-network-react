// Action Type
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

// Action Creator
export const sendMessageActionCretor = (messageText) => ({
    type: SEND_MESSAGE,
    messageText
})
export const updateNewMessageText = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 6, text: action.messageText }]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText,
            }
        default:
            return state;
    }
}

export default dialogsReducer;