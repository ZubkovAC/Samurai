
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
    profile: null as null | ProfilePropsType

}
export type InitialProfileStateType = typeof initialState


export const profile_Reducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-POST-CHAT-PROFILE': {
            return {
                ...state,
                chatProfile: action.text
            }
        }
        case 'ADD-POST-CHAT-PROFILE': {
            let chatProfil = {id: 25, message: state.chatProfile, likecount: 0}
            return {
                ...state,
                postsProfile: [...state.postsProfile, chatProfil],
                chatProfile: ''
            }
        }
        case 'SET-USER-PROFILE': {
            debugger
            return {...state, profile: {...action.profile}}
        }
        default :
            return state
    }
}

export const updeteNewPostChatProfile = (text: string) => ({type: 'UPDATE-NEW-POST-CHAT-PROFILE', text} as const)
export const addPostProfile = () => ({type: 'ADD-POST-CHAT-PROFILE'} as const)
export const setUserProfile = (profile: ProfilePropsType) => ({type: 'SET-USER-PROFILE', profile} as const)

export type ActionType =
    SetUserProfileAC
    | AddPostProfileAC
    | UpdeteNewPostChatProfileAC

export type SetUserProfileAC = ReturnType<typeof setUserProfile>
export type AddPostProfileAC = ReturnType<typeof addPostProfile>
export type UpdeteNewPostChatProfileAC = ReturnType<typeof updeteNewPostChatProfile>