import { usersProfileAPI} from "../../api/Api";
import {AppStoreType} from "../redux-store";

export type ProfilePropsType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }

}

export type PostsProfileType = {
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

        case 'PROFILE/ADD-POST-CHAT': {
            let chatProfil = {id: 25, message: action.value, likecount: 0}
            return {
                ...state,
                postsProfile: [...state.postsProfile, chatProfil],
                chatProfile: ''
            }
        }
        case 'PROFILE/SET-USER': {
            return {...state, profile: {...action.profile}}
        }

        case "PROFILE/SET-USER-STATUS-USERID":{
            return {...state, status: action.status}
        }
        case "PROFILE/SET-USER-STATUS-UPDATE-USERID":{
            return {...state, status: action.status}
        }
        case "PROFILE/SAVE-PHOTO":{
            //@ts-ignore
            return {...state, profile:{...state.profile , photos:action.photo}}
        }
        default :
            return state
    }
}


//AC
export const addPostProfile = (value:string) => ({type: 'PROFILE/ADD-POST-CHAT',value} as const)
export const setUserProf = (profile: ProfilePropsType) => ({type: 'PROFILE/SET-USER', profile} as const)
export const savePhoto= (photo: string) => ({type: 'PROFILE/SAVE-PHOTO', photo} as const)
export const getStatus = (status:string) => ({type: "PROFILE/SET-USER-STATUS-USERID",status} as const)
export const UpdateStatus = (status:string) => ({type: "PROFILE/SET-USER-STATUS-UPDATE-USERID",status} as const)



//TC
export const setUserProfile = (userId:number) => async (dispatch:any)=>{
    let response = await usersProfileAPI.getProfile(userId)
                    dispatch(setUserProf(response.data))
}
export const setUserStatus = (status:number) => async(dispatch:any)=>{
    let response = await usersProfileAPI.getStatus(status)
            dispatch(getStatus(response.data))
}
export const updateStatus = (status:string) =>async(dispatch:any)=>{
    let response = await usersProfileAPI.UpdateStatus(status)
            if (response.data.resultCode === 0 ) {
                dispatch(UpdateStatus(status))
            }
}
export const savePhotoTC = (photo:string) =>async(dispatch:any)=>{
    let response = await usersProfileAPI.savePhoto(photo)
            if (response.data.resultCode === 0 ) {
                dispatch(savePhoto(response.data.data.photos))
            }
}
export const profileDataTC = (profileData:ProfilePropsType,userId:number) =>async(dispatch:any)=>{
    debugger
    let response = await usersProfileAPI.profileSave(profileData)
            if (response.data.resultCode === 0 ) {
                dispatch(setUserProfile(userId))
            }
}


//type
export type ActionType =
    SetUserProfileAC
    | AddPostProfileAC
    | SetUserProfileStatusUserIdAC
    | SetUserUpdateProfileStatusUserIdAC
    | SavePhotoAC

export type SetUserProfileAC = ReturnType<typeof setUserProf>
export type AddPostProfileAC = ReturnType<typeof addPostProfile>
export type SavePhotoAC = ReturnType<typeof savePhoto>
export type SetUserProfileStatusUserIdAC = ReturnType<typeof getStatus>
export type SetUserUpdateProfileStatusUserIdAC = ReturnType<typeof UpdateStatus>

