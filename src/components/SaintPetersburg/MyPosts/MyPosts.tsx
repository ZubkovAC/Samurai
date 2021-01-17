import React from "react";
import css from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";


export type MyPostPropsType = {
    postsData:PostPropsType[]
}

export const MyPosts = (props:MyPostPropsType) => {

    let postData =  props.postsData.map( t => <Post  message={t.message} likecount={t.likecount}/>)
    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea value='hello'></textarea>
                </div>
               <div>
                   <button>x</button>
               </div>

            </div>
            <div >
                { postData }
            </div>
        </div>
    )
}