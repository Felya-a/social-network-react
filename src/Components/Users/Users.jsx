import React from 'react';
import classes from './Users.module.css';
import Preloader from '../common/PreLoader/Preloader.jsx';
import User from './User.jsx';
import Paginator from '../Paginator/Paginator';


let Users = (props) => {

  return (
    < div className={classes.UsersContent}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        chengeCurrentPage={props.chengeCurrentPage}
        currentPage={props.currentPage}
      />
      {(props.isFetching) ? // PreLoader
        <Preloader /> :
        props.users.map((item, index) =>
          <div key={index}>
            <User item={item}
              key={index}
              unfollowThunkCreator={props.unfollowThunkCreator}
              followThunkCreator={props.followThunkCreator}
              followingIsProgress={props.followingIsProgress} />
          </div>
        )
      }
      {/* < div className={classes.more}>
        <button>SEND MORE</button>
      </div> */}
    </div >
  )
}
export default Users;