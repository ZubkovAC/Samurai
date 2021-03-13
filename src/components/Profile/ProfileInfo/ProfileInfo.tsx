import React from "react";
import css from './ProfileInfo.module.css'
import {ProfilePropsType} from "../../../redux/Profile_Reducer";
import {ProfileStatus} from './ProfileStatus'

type MapStateToPropsType = {
    profile: ProfilePropsType
    status:string
    updateStatus:(status:string)=>void
}

export const ProfileInfo = (props:MapStateToPropsType) =>{
        return(
            <div className={css.ProfileInfo}>

                    <img src={props.profile.photos.large ?  props.profile.photos.large : 'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg' } alt='~error-photo - Profile-container~'/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <h5>photo+discription</h5>

            </div>
        )
}