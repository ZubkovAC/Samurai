import React from "react";
import css from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";
import {DispatchPostChangeCreatorChatType, DispatchAddChatPropsType} from "../../../redux/store";
import {addPostChatActionCreator, onPostChangeCreatorChat} from "../../../redux/store";


export type MyPostPropsType = {
    postsData:PostPropsType[]
    chat:string
    dispatch:(action:  DispatchAddChatPropsType| DispatchPostChangeCreatorChatType )=>void
}

export const MyPosts = (props:MyPostPropsType) => {

    let postData =  props.postsData.map( t => <Post  message={t.message} likecount={t.likecount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.dispatch(addPostChatActionCreator())
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch(onPostChangeCreatorChat(text))
    }

    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.chat}/>
                </div>
               <div>
                   <button onClick={addPost} >add post</button>
               </div>

            </div>
            <div >
                { postData }
            </div>
        </div>
    )
}