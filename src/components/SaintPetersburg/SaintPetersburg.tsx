import React from "react";
import css from "./SaintPetersburg.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {DispatchAddPropsType, DispatchPropsType} from "../../State";

type SaintPetersburgPropsType = {
    postsData:PostPropsType[]
    newPostText:string
    dispatch:(action: DispatchPropsType | DispatchAddPropsType )=>void

}

export const SaintPetersburg = (props:SaintPetersburgPropsType)=>{
    return(
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                newPostText={props.newPostText}

                dispatch={props.dispatch}
            />
        </div>
    )
}