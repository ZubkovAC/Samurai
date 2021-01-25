import React from "react";
import css from "./SaintPetersburg.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";
import {DispatchPostChangeCreatorChatType, DispatchPropsType, DispatchAddPropsType, DispatchAddChatPropsType} from "../../redux/State";

type SaintPetersburgPropsType = {
    postsData:PostPropsType[]
    chat:string
    dispatch:(action: DispatchAddChatPropsType | DispatchPostChangeCreatorChatType )=>void

}

export const SaintPetersburg = (props:SaintPetersburgPropsType)=>{
    return(
        <div className={css.content}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                chat={props.chat}

                dispatch={props.dispatch}
            />
        </div>
    )
}