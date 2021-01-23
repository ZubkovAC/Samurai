import React from "react";
import css from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";


export type MyPostPropsType = {
    postsData:PostPropsType[]
    newPostText:string

    dispatch:any
}

export const MyPosts = (props:MyPostPropsType) => {

    let postData =  props.postsData.map( t => <Post  message={t.message} likecount={t.likecount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.dispatch({type:"ADD-POST"})
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text})
    }


    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
               <div>
                   <button onClick={addPost} >add post</button>
               </div>

            </div>
            <div >
                { postData }
            </div>
        </div>
    )
}