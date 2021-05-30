import UserPhotoSmall from '../../assets/images/AvaSmall.png';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

//followingIsProgress - это массив id пользователей которые находятся в ожидании ответа сервера на follow/unfollow
function User({ item, followingIsProgress, followThunkCreator:follow, unfollowThunkCreator:unfollow }) {
  return (
    <div key={item.id} className={classes.UserContent}>
      <div className={classes.face}>
        <div className={classes.avatar}>
          <NavLink to={'/profile/' + item.id}>
            <img src={(item.photos.large) ? item.photos.large : UserPhotoSmall} alt="avatar" />
          </NavLink >
        </div>
        <div className={classes.follow}>
          {item.followed
            ? <button disabled={followingIsProgress.some(id => id == item.id)} onClick={() => unfollow(item.id)}>
              UNFOLLOW
              </button>

            : <button disabled={followingIsProgress.some(id => id == item.id)} onClick={() => follow(item.id)}>
              FOLLOW
              </button>
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
    </div >
  )
}

export default User;