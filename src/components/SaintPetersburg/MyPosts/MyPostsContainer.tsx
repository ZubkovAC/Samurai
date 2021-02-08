import {
    addPostChatActionCreator,
    DispatchPostChangeCreatorChatType,
    onPostChangeCreatorChat,
    DispatchAddChatPropsType,
    } from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";


export type MyPostsContainerPropsType = {
    state: AppStateType
    dispatch: (action: DispatchPostChangeCreatorChatType | DispatchAddChatPropsType) => void
}



let mapStateToProps = (state:AppStateType) =>{
    return {
        messagesPage:state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: (action: DispatchPostChangeCreatorChatType | DispatchAddChatPropsType) => void) =>{
    return {
        onPostChangeCreatorChat: (text:any)=>{
            dispatch(onPostChangeCreatorChat(text))
        },
        addPost:()=>{
            dispatch(addPostChatActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)