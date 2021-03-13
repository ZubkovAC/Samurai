import axios from "axios";
import {usersAPI, usersProfileAPI} from "../api/Api";

export type ProfilePropsType = {

    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": null,
        "github": string,
        "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }

}


type PostsProfileType = {
    id: number
    message: string
    likecount: number
}


let initialState = {
    postsProfile: [
        {id: 1, message: 'Hello men!', likecount: 11},
        {id: 2, message: "It's time?", likecount: 5},
        {id: 3, message: 'Go to learn!', likecount: 12},
        {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
        {id: 5, message: "Sharpen the saw before working", likecount: 7},
        {id: 6, message: "Make your life a dream", likecount: 4},
        {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
    ] as Array<PostsProfileType>,
    chatProfile: 'Hello',
    profile: null as null | ProfilePropsType,
    userId: 1,
    status:''
}
export type InitialProfileStateType = typeof initialState


export const profile_Reducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType => {
    switch (action.type) {

        case 'ADD-POST-CHAT-PROFILE': {
            let chatProfil = {id: 25, message: action.value, likecount: 0}
            return {
                ...state,
                postsProfile: [...state.postsProfile, chatProfil],
                chatProfile: ''
            }
        }

        case 'SET-USER-PROFILE': {
            return {...state, profile: {...action.profile}}
        }

        case "SET-USER-PROFILE-STATUS-USERID":{
            return {...state, status: action.status}
        }
        case "SET-USER-PROFILE-STATUS-UPDATE-USERID":{
            return {...state, status: action.status}
        }
        default :
            return state
    }
}

export const addPostProfile = (value:string) => ({type: 'ADD-POST-CHAT-PROFILE',value} as const)
export const setUserProf = (profile: ProfilePropsType) => ({type: 'SET-USER-PROFILE', profile} as const)



export const getStatus = (status:string) => ({type: 'SET-USER-PROFILE-STATUS-USERID',status} as const)
export const UpdateStatus = (status:string) => ({type: 'SET-USER-PROFILE-STATUS-UPDATE-USERID',status} as const)


export type ActionType =
    SetUserProfileAC
    | AddPostProfileAC
    | SetUserProfileStatusUserIdAC
    | SetUserUpdateProfileStatusUserIdAC

export type SetUserProfileAC = ReturnType<typeof setUserProf>
export type AddPostProfileAC = ReturnType<typeof addPostProfile>



export type SetUserProfileStatusUserIdAC = ReturnType<typeof getStatus>
export type SetUserUpdateProfileStatusUserIdAC = ReturnType<typeof UpdateStatus>


export const setUserProfile = (userId:number) => (dispatch:any)=>{
    usersProfileAPI.getProfile(userId)
                .then(response => {
                    dispatch(setUserProf(response.data))
                })
        }


export const setUserStatus = (status:number) =>(dispatch:any)=>{
    usersProfileAPI.getStatus(status)
        .then(response=>{
            dispatch(getStatus(response.data))
        })
}
export const updateStatus = (status:string) =>(dispatch:any)=>{
    usersProfileAPI.UpdateStatus(status)
        .then(response=>{
            if (response.data.resultCode === 0 ){
                dispatch(UpdateStatus(status))
            }
        })
}

