import {ADD_POST, ADD_POST_CHAT, MessagesPagePropsType, UPDATE_NEW_POST_CHAT,} from "./store";

let initialState={
    postsData: [
        {id: 1, message: 'Hello men!', likecount: 11},
        {id: 2, message: "It's time?", likecount: 5},
        {id: 3, message: 'Go to learn!', likecount: 12},
        {id: 4, message: "It is better to sail on a bad plan than on the will of fate", likecount: 4},
        {id: 5, message: "Sharpen the saw before working", likecount: 7},
        {id: 6, message: "Make your life a dream", likecount: 4},
        {id: 7, message: "It's easier to sit on the couch and complain about life than to move", likecount: 1},
    ],
    chat:'Hello'
}

export const SPB_Reducer = (state:MessagesPagePropsType = initialState, action:any)=>{
    switch (action.type) {
        case UPDATE_NEW_POST_CHAT:
            return {
                ...state,
                chat : action.newText
            }
        case ADD_POST_CHAT:
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