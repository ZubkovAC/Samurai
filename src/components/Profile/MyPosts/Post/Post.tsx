import React from "react";
import css from './Post.module.css'

export type PostPropsType ={
 //   id:number
    message:string
    likecount:number
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={css.post}>
            <div>
                <img src="https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg" alt="ninja"/>
                {props.message}
            </div>
            <span> like {props.likecount}</span>
        </div>
    )
}
