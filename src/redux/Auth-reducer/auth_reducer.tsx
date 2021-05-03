import {usersAPI} from "../../api/Api";
import {stopSubmit} from "redux-form";


let initialAuthState = {
    userId: -1,
    email: '',
    login: '',
    isAuth: false
}

export type InitialAuthStateType = typeof initialAuthState

export const auth_Reducer = (state: InitialAuthStateType = initialAuthState, action: UserActionType): InitialAuthStateType => {
    switch (action.type) {
        case "AUTH/SET-USER-DATA": {
            return {
                ...state,
                ...action.payload,
            }
        }
        case 'AUTH/TOGGLE-USER': {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default :
            return state
    }
}

export const setAuthUserD = (userId: number, email: string, login: string, isAuth: boolean = false) =>
    ({type: "AUTH/SET-USER-DATA", payload: {userId, email, login, isAuth}} as const)

export const setAuthUserIsFetching = (isAuth: boolean) => ({type: 'AUTH/TOGGLE-USER', isAuth} as const)

export type SetAuthUserDataAC = ReturnType<typeof setAuthUserD>
export type SetAuthUserIsFetchingAC = ReturnType<typeof setAuthUserIsFetching>

export const getAuthUserData = () => async (dispatch: any) => {
    let response = await usersAPI.getLogin()
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserD(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    let response = await usersAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logOut = async () => async (dispatch: any) => {
    let response = await usersAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserD(-1, '', '', false))
    }
}


export type UserActionType =
    SetAuthUserDataAC |
    SetAuthUserIsFetchingAC

