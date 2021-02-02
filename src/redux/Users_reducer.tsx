
let initialState = {
    users: []
}

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET-USERS'

export type UserStateType = {
    users: UserType[]
}
export type UserType = {
    id: number
    name: string
    country: string
    city: string
    title: string
    follow: boolean
    img: string
}
type ActionUsersType = {
    type: 'FOLLOW' | 'UNFOLLOW' | 'SET-USERS'
    userID: number
    users:UserType[]
}


export const users_Reducer = (state: UserStateType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users:[...state.users, ...action.users]}
        default :
            return state
    }
}

export const followAC = (userID:number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID:number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users:UserType[])=> ({type:SET_USERS,users})