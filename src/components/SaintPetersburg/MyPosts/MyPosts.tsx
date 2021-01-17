import React from "react";
import css from './MyPosts.module.css'
import { Post } from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hello men!', likeconunt:11},
        {id:2, message:"It's time?", likeconunt:5},
        {id:3, message:'Go to learn!', likeconunt:12},
        {id:4, message: "It is better to sail on a bad plan than on the will of fate", likeconunt:4},
        {id:5, message: "Sharpen the saw before working", likeconunt:7},
        {id:6, message: "Make your life a dream", likeconunt:4},
        {id:7, message: "It's easier to sit on the couch and complain about life than to move", likeconunt:1},
    ]

    let postData = postsData.map( t => <Post message={t.message} likecount={t.likeconunt}/>)

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