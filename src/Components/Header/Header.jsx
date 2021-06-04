import { NavLink, Redirect } from 'react-router-dom';
import './Header.scss';
import UserLogo from '../../assets/images/user.svg'

const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src='https://www.webidunya.com/wp-content/uploads/2018/07/logo-tasarim-firmalari.png'></img> */}
                <span>Social Network</span>
            </div>
            <div className="info">
                <span> 641027B@gmail.com</span>
            </div>
            <a className="loginBlock" href="/login">
                <img src={UserLogo} alt="User" />
                {props.isAuth ?
                    < NavLink className="loginBlock__item" to={`/login`} >{props.login.toUpperCase()}</NavLink> :
                    < NavLink className="loginBlock__item" to={`/login`}>Sing in</NavLink>
                }
            </a>
        </header >
    )
}

export default Header;