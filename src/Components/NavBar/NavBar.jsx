import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to="/profile" className={classes.item} activeClassName={classes.activeLink} >Profile</NavLink>
            <NavLink to="/dialogs" className={classes.item} activeClassName={classes.activeLink} >Messages</NavLink>
            <NavLink to="/users" className={classes.item} activeClassName={classes.activeLink} >Users</NavLink>
            <NavLink to="/news" className={classes.item} activeClassName={classes.activeLink}>News</NavLink>
            <NavLink to="/music" className={classes.item} activeClassName={classes.activeLink}>Music</NavLink>
            <br />
            <NavLink to="/settings" className={classes.item} activeClassName={classes.activeLink}>Settings</NavLink>
        </nav>
    )
}

export default NavBar;