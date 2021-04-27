import React from "react";
import css from './ProfileInfo.module.css'
import {ProfilePropsType} from "../../../redux/Profile-reducer/Profile_Reducer";
import {ProfileStatus} from './ProfileStatus'

type MapStateToPropsType = {
    profile: ProfilePropsType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e:any)=>void
}

export const ProfileInfo = React.memo((props: MapStateToPropsType) => {

    const mainPhotoSelected = (e:any) => {
        if(e.target.files.length){
            debugger
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={css.ProfileInfo}>

            <img src={props.profile.photos.large
                ? props.profile.photos.large
                : 'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'} alt='Avatar'/>
            <div>
                {props.isOwner && <input type={'file'}  onChange={mainPhotoSelected}/>}
            </div>


            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <h5>photo+discription</h5>

        </div>
    )
})


