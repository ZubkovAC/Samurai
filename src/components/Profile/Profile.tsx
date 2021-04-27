import React from "react";
import css from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "../../redux/Profile-reducer/Profile_Reducer";

type MapAllToProfilePropsType = {
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(e:any)=>void
}

export const Profile =React.memo( (props:MapAllToProfilePropsType)=>{
    return(
        <div className={css.content}>

            <ProfileInfo
                status={props.status}
                updateStatus={props.updateStatus}
                profile={props.profile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
})