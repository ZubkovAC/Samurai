import React from "react";
import css from "./SaintPetersburg.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";

type SaintPetersburgPropsType = {
    state: AppStateType
    dispatch:(action:any)=>void
}

export const SaintPetersburg = ()=>{
    return(
        <div className={css.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}