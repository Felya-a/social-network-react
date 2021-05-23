import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src='https://www.webidunya.com/wp-content/uploads/2018/07/logo-tasarim-firmalari.png'></img>
            </div>
            <div className={classes.info}>
                Header
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    props.login.toUpperCase() :
                    < NavLink className={classes.loginBlock_Item} to={`/login`}>Login</NavLink>
                }
            </div>
        </header >
    )
}

export default Header;