import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={classes.Message}>{props.text}</div>
    )
}

export default MessageItem;