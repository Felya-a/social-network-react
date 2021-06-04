import { NavLink } from 'react-router-dom';
import '../Dialogs.scss';

const MessageItem = (props) => {
    return (
        <div key={props.key} className="Message">{props.text}</div>
    )
}

export default MessageItem;