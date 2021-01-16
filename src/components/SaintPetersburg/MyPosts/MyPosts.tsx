import React from "react";
import css from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={css.content}>
            My post
            <div>
                New Post
            </div>
            <div>
                <textarea value='hello'></textarea>
                <button>x</button>
            </div>
            <div >
                <Post message='Hello men!' likecount={11}/>
                <Post message="It's time?" likecount={5}/>
                <Post message='Go to learn!' likecount={15}/>
            </div>
        </div>
    )
}