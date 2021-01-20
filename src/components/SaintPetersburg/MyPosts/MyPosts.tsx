import React from "react";
import css from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";


export type MyPostPropsType = {
    postsData:PostPropsType[]
    addPost:(addPost:string)=>void
}

export const MyPosts = (props:MyPostPropsType) => {

    let postData =  props.postsData.map( t => <Post  message={t.message} likecount={t.likecount}/>)




    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        debugger
        let text = newPostElement.current.value
        props.addPost(text)
    }




    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
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