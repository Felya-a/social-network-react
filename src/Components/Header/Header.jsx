import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './Header.scss';
import UserLogo from '../../assets/images/user.svg'

const Header = (props) => {
    const history = useHistory()
    return (
        <header className="header">
            <div className="logo">
                {/* <img src='https://www.webidunya.com/wp-content/uploads/2018/07/logo-tasarim-firmalari.png'></img> */}
                <span>Social Network</span>
            </div>
            <div className="info">
                <span></span>
            </div>
            <div className="loginBlock" onClick={() => history.push("/login")}>
                <img src={UserLogo} alt="User" />
                {props.isAuth ?
                    < NavLink className="loginBlock__item" to={`/login`} >{props.login.toUpperCase()}</NavLink> :
                    < NavLink className="loginBlock__item" to={`/login`}>Sing in</NavLink>
                }
            </div>
        </header >
    )
}

export default Header;