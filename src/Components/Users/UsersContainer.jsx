import { connect } from "react-redux";
import React from 'react';
import { follow, unfollow, chengeCurrentPage, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../redux/usersReduser";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { getCurrentPage, getFollowingIsProgress, getPageSize, getTotalUsersCount, getUsers, getFetching } from "../../redux/usersSelectors";
import * as Selectors from "../../redux/usersSelectors";

// Классовая компонента (как понял это предок Хуков)
class UsersAPIContainer extends React.Component {

  // вызывается 1 раз при переходе на /users
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  chengeCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize)
  }
  // в реакте главный метод объекта класса
  render() {
    return <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      chengeCurrentPage={this.chengeCurrentPage}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      currentPage={this.props.currentPage}
      isFetching={this.props.isFetching}
      followingIsProgress={this.props.followingIsProgress}
      unfollowThunkCreator={this.props.unfollowThunkCreator}
      followThunkCreator={this.props.followThunkCreator}
    />
  }
}


// компонента перересовывается только если что то меняется в этих свойствах state
let mapStateToProps = (state) => {
  return {
    users: Selectors.getUsers(state),
    pageSize: Selectors.getPageSize(state),
    totalUsersCount: Selectors.getTotalUsersCount(state),
    currentPage: Selectors.getCurrentPage(state),
    isFetching: Selectors.getFetching(state),
    followingIsProgress: Selectors.getFollowingIsProgress(state),
  }
}



// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
// const UsersContainer = withAuthRedirect(connect
//   (mapStateToProps, { follow, unfollow, unfollowThunkCreator, followThunkCreator, chengeCurrentPage, toggleFollowingProgress, getUsers: getUsersThunkCreator })(UsersAPIContainer))
// функция connect автоматически определяет что ей пришла не функция, а объект. Автоматически обертывает callback`ами (диспатчами)

export default compose(
  connect (mapStateToProps, { follow, unfollow, unfollowThunkCreator, followThunkCreator, chengeCurrentPage, toggleFollowingProgress, getUsers: getUsersThunkCreator }),
  withAuthRedirect,
  )(UsersAPIContainer);

// в одном файле лежит 2 контейнерные компоненты. Та которая создается с помощью connect оборачивает вторую контейнерную компоненту. То есть оборачивам контейнерную компоненту контейнерной компонентой