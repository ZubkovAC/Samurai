import React from "react";

import {addPostChatActionCreator, onPostChangeCreatorChat} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";


export type MyPostsContainerPropsType = {
    state:AppStateType
    dispatch:(action:any)=>void
}

export const MyPostsContainer = (props:MyPostsContainerPropsType) => {

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.dispatch(addPostChatActionCreator())
    }

    const onPostChange = (text:any) =>{
        props.dispatch(onPostChangeCreatorChat(text))
    }

    return <MyPosts onPostChangeCreatorChat={onPostChange}
                    addPost={addPost}
                    messagesPage={props.state.messagesPage}/>
}