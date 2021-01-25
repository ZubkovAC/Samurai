import {ADD_POST, ADD_POST_CHAT, ProfilePagePropsType, UPDATE_NEW_POST_TEXT} from "./store"

export const bonusReducer = (state:ProfilePagePropsType,action:any)=>{
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            let newPost = {id: 15, message: state.newPostText}
            state.messagesData.push(newPost)
            state.newPostText = ''
            return state
        default :
            return state
    }
}