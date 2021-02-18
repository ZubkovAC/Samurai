

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
    users: [] as UserType[],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export type InitialUsersStateType = typeof initialState

export const users_Reducer = (state: InitialUsersStateType = initialState, action: UserActionType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":

            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.userID) {

                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.userID) {

                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.pageNumber}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.fetching}
        }
        default :
            return state
    }
}


export const follow = (userID: number) => ({type: 'FOLLOW', userID} as const)             //  (userID: number) :any
export const unfollow = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (pageNumber: number) => ({type: 'SET-CURRENT-PAGE', pageNumber} as const)
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const setIsFetching = (fetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', fetching} as const)

export type FollowAC = ReturnType<typeof follow>
export type UnfollowAC = ReturnType<typeof unfollow>
export type SetUsersAC = ReturnType<typeof setUsers>
export type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export type SetTotalCountAC = ReturnType<typeof setTotalCount>
export type SetIsFetchingtAC = ReturnType<typeof setIsFetching>

export type UserActionType =
    FollowAC |
    UnfollowAC |
    SetUsersAC |
    SetCurrentPageAC |
    SetTotalCountAC |
    SetIsFetchingtAC




