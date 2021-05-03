import React, {useState} from "react";
import css from './ProfileInfo.module.css'
import {profileDataTC, ProfilePropsType} from "../../../redux/Profile-reducer/Profile_Reducer";
import {ProfileStatus} from './ProfileStatus'
import ProfileDataForm from "./ProfileDataForm";
import {useDispatch, useSelector} from "react-redux";
import {createField} from "../../common/FormsControls/FormsControls";
import {AppStateType, AppStoreType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    profile: ProfilePropsType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (e:any)=>void
}

export const ProfileInfo = React.memo((props: MapStateToPropsType) => {
    const dispatch = useDispatch()
    let userId = useSelector<AppStateType,number>(state => state.auth_user.userId)
    const [edit,setEditMode]=useState<boolean>(false)
    const mainPhotoSelected = (e:any) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: ProfilePropsType) => {
        console.log(formData)
        dispatch(profileDataTC(formData,userId))
        setEditMode(false)
    }
    const setEditModeB =(edit:boolean) =>{
        setEditMode(edit)
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
            {
                edit
                    ?<ProfileDataForm  initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    :<ProfileData isOwner={props.isOwner} goToEditMode={()=>setEditModeB(true)} profile={props.profile}/>
            }

        </div>
    )
})

export const ProfileData = ({profile ,isOwner,goToEditMode}:ProfileDataPropsType) =>{
    return <div>
        {isOwner &&<div><button onClick={()=>goToEditMode(true)}>update111</button></div>}
        <h5>fullName:{profile.fullName}</h5>
        <div>aboutMe:{profile.aboutMe}</div>
        <div>lookingForAJob:{profile.lookingForAJob?'yes':'no'}</div>
        {profile.lookingForAJob
        && <div>lookingForAJobDescription:{profile.lookingForAJobDescription} </div>
        }
        <h4>Social</h4>
        <div>{Object.keys(profile.contacts).map(key=>{
            return <Contact contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}</div>
    </div>
}


export function Contact  ({contactTitle,contactValue}:ContactPropsType){
    return <div>
        <b style={{paddingLeft:'10px'}}>{contactTitle}:</b>{contactValue}
    </div>
}



//Type
export type ProfileDataPropsType = {
    profile:ProfilePropsType
    isOwner:boolean
    goToEditMode:(edit:boolean)=>void
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ContactPropsType={
    contactTitle:string
    contactValue:string
}

