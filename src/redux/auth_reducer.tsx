import {usersAPI} from "../api/Api";

let initialState = {
    userId: 2 ,
    email:'error',
    login:'error',
    isAuth: false
}

export type InitialUsersStateType = typeof initialState

export const auth_Reducer = (state: InitialUsersStateType = initialState, action: UserActionType): InitialUsersStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":{
            return{
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case 'TOGGLE-USER-IS-AUTH':{
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default :
            return state
    }
}

export const setAuthUserD = (userId:number,email:string,login:string) => ({type: 'SET-AUTH-USER-DATA', data:{userId,email,login}} as const)

export const setAuthUserIsFetching = (isAuth: boolean) => ({type: 'TOGGLE-USER-IS-AUTH', isAuth} as const)

export type SetAuthUserDataAC = ReturnType<typeof setAuthUserD>
export type SetAuthUserIsFetchingAC = ReturnType<typeof setAuthUserIsFetching>

export const setAuthUserData = (userId:number,email:string,login:string)=>{
    return (dispatch:any)=>{
        dispatch(setAuthUserD(userId,email,login))
        usersAPI.getLogin()
            .then(data => {
                if(data.resultCode ===0){
                    let {id,email,login}=data.data
                    dispatch(setAuthUserD(id,email,login))
                }
            })
    }
}



export type UserActionType =
    SetAuthUserDataAC |
    SetAuthUserIsFetchingAC
