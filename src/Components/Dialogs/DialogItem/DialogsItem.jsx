import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={classes.dialog}> {props.name} </NavLink>
    )
}


export default DialogItem;