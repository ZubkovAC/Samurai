import React from "react";
import css from "./SaintPetersburg.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type SaintPetersburgPropsType = {
    postsData:PostPropsType[]
    addPost:(addPost:string)=>void
    newPostText:string
    updateNewPostText:string
}

export const SaintPetersburg = (props:SaintPetersburgPropsType)=>{
    return(
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                newPostText={props.newPostText}

                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}