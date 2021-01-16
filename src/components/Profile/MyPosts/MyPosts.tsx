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
                <textarea></textarea>
                <button>x</button>
            </div>
            <div >
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}