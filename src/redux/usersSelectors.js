import { createSelector } from "reselect";

const getUsersPrimitiveSelector = (state) => {
  return state.usersPage.users;
}

export const getUsers = createSelector(getUsersPrimitiveSelector, (users) => {
  return users;
})

export const getPageSizePrimitiveSelector = (state) => {
  return state.usersPage.pageSize;
}

export const getTotalUsersCountPrimitiveSelector = (state) => {
  return state.usersPage.totalUsersCount;
}

export const getCurrentPagePrimitiveSelector = (state) => {
  return state.usersPage.currentPage;
}

export const getFetchingPrimitiveSelector = (state) => {
  return state.usersPage.isFetching;
}

export const getFollowingIsProgressPrimitiveSelector= (state) => {
  return state.usersPage.followingIsProgress;
}