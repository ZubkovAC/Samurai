import {ADD_POST, ADD_POST_CHAT, MessagesPagePropsType, UPDATE_NEW_POST_CHAT,} from "./State";

export const SPB_Reducer = (state:MessagesPagePropsType, action:any)=>{
    switch (action.type) {
        case UPDATE_NEW_POST_CHAT:
            state.chat = action.newText
            return state
        case ADD_POST_CHAT:
            let newChat = {id: 25, message: state.chat, likecount: 0}
            state.postsData.push(newChat)
            state.chat = ''
            return state
        default :
            return state
    }
}