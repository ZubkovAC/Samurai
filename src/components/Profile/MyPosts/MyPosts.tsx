import React from "react";
import css from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { ProfilePropsContainerType } from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {BonusPropsType} from "../../Bonus/BonusContainer";
type ProfileFormProps = {
    ProfileInput:string
}

export const MyPosts = (props:ProfilePropsContainerType) => {

    let postData =  props.profile.postsProfile.map( t => <Post key={t.id} message={t.message} likecount={t.likecount}/>)

    let addPost = (value:ProfileFormProps)=>{
        props.addPostProfile(value.ProfileInput)
    }


    const ProfileForm :React.FC<InjectedFormProps<ProfilePropsContainerType & ProfileFormProps>> = (props)=>{
        return (
            <form onSubmit={props.handleSubmit}>
                <Field name="ProfileInput" type='text' component='textarea' placeholder='Message'/>
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
                {/*<div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.profile.chatProfile}/>
                </div>
               <div>
                   <button onClick={addPost} >add post</button>
               </div>*/}

            </div>
            <div >
                { postData }
            </div>
        </div>
    )
}