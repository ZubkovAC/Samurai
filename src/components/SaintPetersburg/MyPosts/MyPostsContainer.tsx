import React from "react";

import {
    addPostChatActionCreator,
    DispatchPostChangeCreatorChatType,
    onPostChangeCreatorChat,
    DispatchAddChatPropsType,
    StoreType
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


export type MyPostsContainerPropsType = {
    state: AppStateType
    dispatch: (action: DispatchPostChangeCreatorChatType | DispatchAddChatPropsType) => void
}

export const MyPostsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let state =store.getState()
                    let newPostElement = React.createRef<any>()
                    let addPost = () => {
                        store.dispatch(addPostChatActionCreator())
                    }

                    const onPostChange = (text: any) => {
                        store.dispatch(onPostChangeCreatorChat(text))
                    }

            return <MyPosts onPostChangeCreatorChat={onPostChange}
                     addPost={addPost}
                     messagesPage={state.messagesPage}/>
                     }}
        </StoreContext.Consumer>
    )
}