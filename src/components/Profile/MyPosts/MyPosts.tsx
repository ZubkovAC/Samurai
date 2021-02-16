import React from "react";
import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { ProfilePropsContainerType } from "./MyPostsContainer";


export const MyPosts = (props:ProfilePropsContainerType) => {

    let postData =  props.profile.postsProfile.map( t => <Post key={t.id} message={t.message} likecount={t.likecount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.addPostProfile()
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.updeteNewPostChatProfile(text)
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
                              value={props.profile.chatProfile}/>
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