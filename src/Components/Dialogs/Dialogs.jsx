import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './MessageItem/MessageItem';
import classes from './Dialogs.module.css';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLengthCreator10 = maxLengthCreator(10); // потом исправить на большее значение


const DialogsForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={classes.MessageInput}>
			<Field
				cols='30'
				rows='3'
				placeholder='Введите сообщение...'
				name='messageText'
				validate = {[required, maxLengthCreator10]}
				component={Textarea}
			/>
			<button className={classes.submit} type='submit'>Отправить</button>
		</form>
	)
}

const DialogsReduxFrom = reduxForm({ form: 'messages' })(DialogsForm);

const Dialogs = (props) => {
	// преобразование объкта с сообщениями и диалогами в jsx разметку (поэлементно)
	let DialogsElemenst = props.dialogsPage.dialogs.map(item => (<DialogItem name={item.name} id={item.id} />))
	let MessagesElemenst = props.dialogsPage.messages.map(item => (<MessageItem text={item.text} id={item.id} />))

	const onSubmit = (formData) => {
		props.sendMessage(formData.messageText)
	}

	return (
		<div className={classes.content}>
			<div className={classes.dialogsItems}>
				{DialogsElemenst}
			</div>
			<div className={classes.MessagesItems}>
				<div className={classes.MessagesElemenst}>
					{MessagesElemenst}
				</div>
				<DialogsReduxFrom onSubmit={onSubmit}/>
			</div>
		</div >
	)
}

export default Dialogs;