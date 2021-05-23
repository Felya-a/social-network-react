import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios'
import UserPhotoSmall from '../../assets/images/AvaSmall.png';

const Users = (props) => {


  let getUsers = () => {
    if (props.users.length == 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
      })
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(item =>
        <div key={item.id} className={classes.UserContent}>
          <div className={classes.face}>
            <div className={classes.avatar}>
              <img src={(item.photos.large) ? item.photos.large : UserPhotoSmall} alt="avatar" />
            </div>
            <div className={classes.follow}>
              {item.followed ?
                <button onClick={() => { props.unfollow(item.id) }}>UNFOLLOW</button> :
                <button onClick={() => { props.follow(item.id) }}>FOLLOW</button>
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
        </div >)}
      <div className={classes.more}>
        <button>SEND MORE</button>
      </div>
    </div>
  )
}

export default Users;