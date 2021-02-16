import { ADD_POST_CHAT, UPDATE_NEW_POST_CHAT,} from "./store";

let initialState={
    postsData: [
        {id: 1, message: 'Hello men!', likecount: 11},
        {id: 2, message: "It's time?", likecount: 5},
        {id: 3, message: 'Go to learn!', likecount: 12},
        {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
        {id: 5, message: "Sharpen the saw before working", likecount: 7},
        {id: 6, message: "Make your life a dream", likecount: 4},
        {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
    ]as Array<PostsDataType> ,
    chat:'Hello'
}

export type InitialSPBStateType = typeof initialState


export const SPB_Reducer = (state:InitialSPBStateType = initialState, action:ActionSPBType):InitialSPBStateType=>{
    switch (action.type) {
        case UPDATE_NEW_POST_CHAT_SPB:
            return {
                ...state,
                chat : action.text
            }
        case ADD_POST_CHAT_SPB:
            let newChat = {id: 25, message: state.chat, likecount: 0}
            return {
                ...state,
                postsData:[...state.postsData,newChat],
                chat : ''
            }
        default :
            return state
    }
}

let UPDATE_NEW_POST_CHAT_SPB = 'UPDATE-NEW-POST-CHAT-SPB'
let ADD_POST_CHAT_SPB = 'ADD-POST-CHAT-SPB'

type ActionSPBType =
    UpdateNewPostChatSPBType |
    AddPostChatSPBType

export const updateNewPostChatSPB = (text:string):any =>({type:UPDATE_NEW_POST_CHAT_SPB,text}as const )
export const addPostChatSPB = () =>({type:ADD_POST_CHAT_SPB}as const)

export type UpdateNewPostChatSPBType = ReturnType<typeof updateNewPostChatSPB>
export type AddPostChatSPBType = ReturnType<typeof addPostChatSPB>

type PostsDataType ={
    id:number
    message:string
    likecount:number
}




