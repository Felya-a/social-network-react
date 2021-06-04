import Dialogs from './Dialogs.jsx';
import { updateNewMessageText, sendMessageActionCretor } from '../../redux/dialogsReducer.js';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';


// превращаем часть state в будущие пропсы
let mapStateToProps = (state) => {  // state передается в параметры самим react-redux - вручную это делать не нужно
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChenge: (text) => {
      dispatch(updateNewMessageText(text))
    },
    sendMessage: (messageText) => {
      dispatch(sendMessageActionCretor(messageText))
    },
  }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) // функция connect вызовет первую фунцкцию и передаст в неё state и вызовет вторую функцию и передаст в неё store.dispatch.bind(store)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // withAuthRedirect,
)(Dialogs);