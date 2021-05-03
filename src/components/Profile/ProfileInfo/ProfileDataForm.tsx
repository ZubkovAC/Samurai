import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {ProfilePropsType} from "../../../redux/Profile-reducer/Profile_Reducer";
import  {InjectedFormProps,reduxForm} from "redux-form";


export type GetStringKeys<T> = Extract<keyof T, string>

type PropsType = {
    profile: ProfilePropsType
}
type ProfileTypeKeys = GetStringKeys<ProfilePropsType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfilePropsType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div >
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>About me</b>:
            { createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} >
                {/* todo: create some solution for embedded objects */}
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormRedixForm = reduxForm<ProfilePropsType,PropsType>({form:'edit-Profile'})(ProfileDataForm)
export default ProfileDataFormRedixForm