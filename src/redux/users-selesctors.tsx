import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
//UsersContainer
export const getUserLoad = (state:AppStateType) => {
    return state.users.users
}
export const getPageSize = (state:AppStateType) => {
    return state.users.pageSize
}
export const getTotalUsersCount = (state:AppStateType) => {
    return state.users.totalUsersCount
}
export const getCurrentPage = (state:AppStateType) => {
    return state.users.currentPage
}
export const getIsFetching = (state:AppStateType) => {
    return state.users.isFetching
}
export const getFollowingInProgress = (state:AppStateType) => {
    return state.users.followingInProgress
}

//UsersContainer
export const getProfile = (state:AppStateType) => {
    return state.profile.profile
}
export const getUserId = (state:AppStateType) => {
    return state.profile.userId
}
export const getStatusProfile = (state:AppStateType) => {
    return state.profile.status
}
export const getAuthorizeUserId = (state:AppStateType) => {
    return state.auth_user.userId
}

//UsersContainer & //UsersContainer
export const getIsAuth = (state:AppStateType) => {
    return state.auth_user.isAuth
}

