import React from "react";
import css from "./SaintPetersburg.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const SaintPetersburg = ()=>{
    return(
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}