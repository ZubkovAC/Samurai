let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1
}

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

export type UserStateType = {
    users: UserType[]
}
export type UserType = {
    id: number
    name: string
    country: string
    city: string
    title: string
    followed: boolean
    photos:{small:string
            large:string }
}

type ActionUsersType = FollowType | UnFollowType | SetCurrentPageType | SetUsersType |SetTotalCountType

type FollowType = {
    type: 'FOLLOW'
    userID: number
}
type UnFollowType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsersType = {
    type: 'SET-USERS'
    users: any
}
type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: any
}

type SetTotalCountType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: any
}

export const users_Reducer = (state: UserStateType = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default :
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalCountAC = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount})