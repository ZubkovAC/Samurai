import React from "react";
import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { MessagesPagePropsType} from "../../../redux/store";



export type MyPostPropsType = {
    messagesPage: MessagesPagePropsType
    onPostChangeCreatorChat:any
    addPost:any
}

export const MyPosts = (props:MyPostPropsType) => {

    let postData =  props.messagesPage.postsData.map( t => <Post  message={t.message} likecount={t.likecount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.addPost()
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.onPostChangeCreatorChat(text)
    }

    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.messagesPage.chat}/>
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