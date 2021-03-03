import React from "react";
import css from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/Profile_Reducer";

type MapAllToProfilePropsType = {
    profile: ProfilePropsType
}

export const Profile = (props:MapAllToProfilePropsType)=>{
    return(
        <div className={css.content}>

            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}