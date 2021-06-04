import { NavLink } from 'react-router-dom';
import '../Dialogs.scss';

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} key={props.key} className="dialog"> {props.name} </NavLink>
    )
}


export default DialogItem;