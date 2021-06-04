import { NavLink } from 'react-router-dom';
import './NavBar.scss';


const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink to="/profile" className="nav__item" activeClassName="activeLink" >Profile</NavLink>
            <NavLink to="/dialogs" className="nav__item" activeClassName="activeLink" >Messages</NavLink>
            <NavLink to="/users" className="nav__item" activeClassName="activeLink" >Users</NavLink>
            <NavLink to="/news" className="nav__item" activeClassName="activeLink">News</NavLink>
            <NavLink to="/music" className="nav__item" activeClassName="activeLink">Music</NavLink>
            <br />
            <NavLink to="/settings" className="nav__item" activeClassName="activeLink">Settings</NavLink>
        </nav>
    )
}

export default NavBar;