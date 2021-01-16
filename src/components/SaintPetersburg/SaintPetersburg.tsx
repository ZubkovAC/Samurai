import React from "react";
import css from "./SaintPetersburg.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const SaintPetersburg = ()=>{
    return(
        <div className={css.content}>
            <div>
                <img src="https://krasivye-mesta.ru/img/Palace-Square.jpg" alt="SaintP"/>
            </div>
            <div>
                photo+discription
            </div>
           <MyPosts/>

        </div>
    )
}