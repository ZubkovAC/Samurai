import React from "react";
import css from './SPBposts.module.css'
import {SPBpost} from "./SPBpost/SPBpost";
import {MapAlltoSpbPropsType} from "./SPBpostsContainer";


export const SPBposts = (props:MapAlltoSpbPropsType) => {

    let postData =  props.messagesSpbPage.postsData.map( t => <SPBpost key={t.id} message={t.message} likecount={t.likecount}/>)

    let newPostElement = React.createRef<any>()
    let addPost = ()=>{
        props.addPostChatSPB()
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.updateNewPostChatSPB(text)
    }

    return (
        <div className={css.content}>
            <h3>My post</h3>
            <div>
                <h4> New Post</h4>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.messagesSpbPage.chat}/>
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