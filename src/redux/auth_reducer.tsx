import {usersAPI} from "../api/Api";
import {stopSubmit} from "redux-form";


let initialState = {
    userId: -1,
    email: '',
    login: '',
    isAuth: false
}

export type InitialUsersStateType = typeof initialState

export const auth_Reducer = (state: InitialUsersStateType = initialState, action: UserActionType): InitialUsersStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":{
            return{
                ...state,
                ...action.payload,
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

export const setAuthUserD = (userId:number  ,email:string ,login:string ,isAuth:boolean = false) =>
    ({type: 'SET-AUTH-USER-DATA', payload:{userId,email,login,isAuth}} as const)

export const setAuthUserIsFetching = (isAuth: boolean) => ({type: 'TOGGLE-USER-IS-AUTH', isAuth} as const)

export type SetAuthUserDataAC = ReturnType<typeof setAuthUserD>
export type SetAuthUserIsFetchingAC = ReturnType<typeof setAuthUserIsFetching>

export const getAuthUserData = ()=>(dispatch:any)=>{
     return usersAPI.getLogin()
            .then(data => {
                if(data.resultCode ===0){
                    let {id,email,login}=data.data
                    dispatch(setAuthUserD(id,email,login,true))
                }
            })
    }



export const login = (email:string,password:string,rememberMe:boolean)=>(dispatch:any)=>{

        usersAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode ===0){
                     dispatch(getAuthUserData())
                }else{
                    let message = response.data.messages.length > 0 ?  response.data.messages[0] : 'Some Error'
                    dispatch(stopSubmit("login",{_error:message}))
                }
            })
    }



export const logOut = ()=>(dispatch:any)=>{
        usersAPI.logOut()
            .then(response => {
                if(response.data.resultCode ===0){
                    dispatch(setAuthUserD(-1,'','',false))
                }
            })
    }








export type UserActionType =
    SetAuthUserDataAC |
    SetAuthUserIsFetchingAC
