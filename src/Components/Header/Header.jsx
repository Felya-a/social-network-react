import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">
                <img src='https://www.webidunya.com/wp-content/uploads/2018/07/logo-tasarim-firmalari.png'></img>
            </div>
            <div className="info">
                <span> 641027B@gmail.com</span>
            </div>
            <div className="loginBlock">
                {props.isAuth ?
                    < NavLink className="loginBlock__item" to={`/login`} >{props.login.toUpperCase()}</NavLink> :
                    < NavLink className="loginBlock__item" to={`/login`}>Sing in</NavLink>
                }
            </div>
        </header >
    )
}

export default Header;