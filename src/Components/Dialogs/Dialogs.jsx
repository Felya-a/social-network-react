import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import './Dialogs.scss';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLengthCreator10 = maxLengthCreator(10); // потом исправить на большее значение


const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className="MessageInput">
			<Field
				cols='30'
				rows='3'
				placeholder='Введите сообщение...'
				name='messageText'
				validate = {[required, maxLengthCreator10]}
				component={Textarea}
			/>
			<button className="submit btn" type='submit'>Отправить</button>
		</form>
	)
}

const DialogsReduxFrom = reduxForm({ form: 'messages' })(DialogsForm);

const Dialogs = (props) => {
	// преобразование объкта с сообщениями и диалогами в jsx разметку (поэлементно)
	let DialogsElemenst = props.dialogsPage.dialogs.map((item, index) => (<DialogItem key={index} name={item.name} id={item.id} />))
	let MessagesElemenst = props.dialogsPage.messages.map((item, index) => (<MessageItem key={index} text={item.text} id={item.id} />))

	const onSubmit = (formData) => {
		props.sendMessage(formData.messageText)
	}

	return (
		<div className="content">
			<div className="dialogsItems">
				{DialogsElemenst}
			</div>
			<div className="MessagesItems">
				<div className="MessagesElemenst">
					{MessagesElemenst}
				</div>
				<DialogsReduxFrom onSubmit={onSubmit}/>
			</div>
		</div >
	)
}

export default Dialogs;