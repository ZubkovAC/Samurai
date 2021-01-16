import React from "react";
import css from './Post.module.css'

export const Post = () => {
    return (
        <div className={css.post}>
            <div>
                <img src="https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg" alt="ninja"/>
                post1

            </div>
            <span>like</span>
        </div>
    )
}
