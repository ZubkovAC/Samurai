import React from "react";
import css from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/Profile_Reducer";

type MapAllToProfilePropsType = {
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
}

export const Profile = (props:MapAllToProfilePropsType)=>{
    return(
        <div className={css.content}>

            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}