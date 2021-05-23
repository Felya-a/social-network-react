import React from 'react';
import classes from './Users.module.css';
import UserPhotoSmall from '../../assets/images/AvaSmall.png';
import Preloader from '../common/PreLoader/Preloader.jsx';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
  // debugger;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // округление вверх
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        onClick={() => props.chengeCurrentPage(i)}
        className={props.currentPage === i && classes.selectedPage}>
        {i}
      </span>)
  }

  return (
    < div className={classes.UsersContent}>
      <div className={classes.pages}>
        {pages}
      </div>
      {(props.isFetching) ? // PreLoader
        <Preloader /> :
        props.users.map(item =>
          <div key={item.id} className={classes.UserContent}>
            <div className={classes.face}>
              <div className={classes.avatar}>
                <NavLink to={'/profile/' + item.id}>
                  <img src={(item.photos.large) ? item.photos.large : UserPhotoSmall} alt="avatar" />
                </NavLink >
              </div>
              <div className={classes.follow}>
                {item.followed ?
                  <button disabled={props.followingIsProgress.some(id => id == item.id)} onClick={() => {

                    props.unfollowThunkCreator(item.id)
                    
                  }}>UNFOLLOW</button> :
                  
                  <button disabled={props.followingIsProgress.some(id => id == item.id)} onClick={() => {
                    
                    props.followThunkCreator(item.id)
                    
                  }}>FOLLOW</button>
                }

              </div>
            </div>
            <div className={classes.info}>
              <div className={classes.name}>
                <div className={classes.surname}>{item.name}</div>
                <div className={classes.status}>{item.status}</div>
              </div>
              <div className={classes.location}>
                <div className={classes.city}>{"item.location.city"}</div>
                <div className={classes.country}>{"item.location.country"}</div>
              </div>
            </div>
          </div >)
      }
      {/* < div className={classes.more}>
        <button>SEND MORE</button>
      </div> */}
    </div >
  )
}
export default Users;