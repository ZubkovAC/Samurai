import React from "react";
import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { ProfilePropsContainerType } from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validors";
import {Textarea} from "../../common/FormsControls/FormsControls";
type ProfileFormProps = {
    ProfileInput:string
}
const maxLength40 =  maxLengthCreator(40)
export const MyPosts = React.memo((props:ProfilePropsContainerType) => {

    let postData =  props.profile.postsProfile.map( t => <Post key={t.id} message={t.message} likecount={t.likecount}/>)

    let addPost = (value:ProfileFormProps)=>{
        props.addPostProfile(value.ProfileInput)
    }


    const ProfileForm :React.FC<InjectedFormProps<ProfilePropsContainerType & ProfileFormProps>> = (props)=>{
        return (
            <form onSubmit={props.handleSubmit}>
                <Field
                    name="ProfileInput" type='text' component={Textarea}
                    placeholder='Message' validate={[required, maxLength40]}
                />
                <div>
                    <button>add message</button>
                </div>


            </form>
        )
    }

    const ProfileFormReduxForm = reduxForm<ProfilePropsContainerType & ProfileFormProps> ({ form: 'ProfileForm' })(ProfileForm)

    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <ProfileFormReduxForm  onSubmit={addPost}/>
            </div>
            <div >
                { postData }
            </div>
        </div>
    )
})