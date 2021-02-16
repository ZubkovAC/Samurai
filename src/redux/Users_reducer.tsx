let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'




export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
        }
    status: null
    followed: boolean

}

let initialState = {
    users:  null as null | UserType[]  ,
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export type InitialUsersStateType = typeof initialState
export const users_Reducer = (state : InitialUsersStateType = initialState, action: UserActionType) :InitialUsersStateType=> {
    switch (action.type) {
        case FOLLOW:


            return {
                ...state,
                // @ts-ignore
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
                // @ts-ignore
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

export const follow = (userID: number) :any=> ({type: FOLLOW, userID} as const)             //  (userID: number) :any
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (pageNumber: number)=> ({type: SET_CURRENT_PAGE, pageNumber} as const)
export const setTotalCount = (totalCount: number) => ({type: SET_TOTAL_COUNT, totalCount} as const)
export const setIsFetching = (fetching: boolean) => ({type: TOGGLE_IS_FETCHING, fetching} as const)

export type FollowAC = ReturnType <typeof follow>
export type UnfollowAC = ReturnType <typeof unfollow>
export type SetUsersAC = ReturnType <typeof setUsers>
export type SetCurrentPageAC = ReturnType <typeof setCurrentPage>
export type SetTotalCountAC = ReturnType <typeof setTotalCount>
export type SetIsFetchingtAC = ReturnType <typeof setIsFetching>

export type UserActionType =
    FollowAC |
    UnfollowAC |
    SetUsersAC |
    SetCurrentPageAC |
    SetTotalCountAC |
    SetIsFetchingtAC




