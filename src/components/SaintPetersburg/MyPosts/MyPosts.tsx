import React from "react";
import css from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='Hello men!' likecount={11}/>
                <Post message="It's time?" likecount={5}/>
                <Post message='Go to learn!' likecount={15}/>
            </div>
        </div>
    )
}