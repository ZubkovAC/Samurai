
let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

export type UserStateType = {
    users: UserType[]
}
export type UserType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status:null
    followed: boolean
}

type ActionUsersType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetTotalCountType |IsFetchingType

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
    users: UserType[]
}
type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

type SetTotalCountType = {
    type: 'SET-TOTAL-COUNT'
    totalCount: number
}
type IsFetchingType = {
    type:'TOGGLE-IS-FETCHING'
    isFetching: boolean | null
}

export const users_Reducer = (state:UserStateType = initialState, action: any):any => {
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
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default :
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID})
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber: number) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsFetching = (fetching:boolean)=>({type:TOGGLE_IS_FETCHING,fetching})