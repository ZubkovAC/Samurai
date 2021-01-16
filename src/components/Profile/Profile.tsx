import React from "react";
import css from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = ()=>{
    return(
        <div className={css.content}>
            <div>
                <img src="https://www.hotelnewsme.com/wp-content/uploads/2016/12/shutterstock_528764896-550x367.jpg" alt=""/>
            </div>
            <div>
                photo+discription
            </div>
           <MyPosts/>

        </div>
    )
}