// Action Type
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

// Action Creator
type SendMessageAcrionCreatorType = {
    type: typeof SEND_MESSAGE
    messageText: string
}
export const sendMessageActionCretor = (messageText: string): SendMessageAcrionCreatorType => ({
    type: SEND_MESSAGE,
    messageText
})
type UpdateNewMessageTextType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}
export const updateNewMessageText = (text: string): UpdateNewMessageTextType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    text: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Kristina" },
        { id: 3, name: "Anasteysha" },
        { id: 4, name: "Kate" },
        { id: 5, name: "Victoria" },
    ] as Array<DialogType>,
    messages: [
        { id: 1, text: "Lorem, ipsum." },
        { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dicta." },
        { id: 1, text: "Далеко-далеко за словесными горами в стране, гласных и согласных." },
    ] as Array<MessageType>,
    newMessageText: 'Message',
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any) => {
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