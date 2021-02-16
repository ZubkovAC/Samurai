import React from "react";
import css from "./SaintPetersburg.module.css";
import {SPBpostsContainer} from "./SPBposts/SPBpostsContainer";
import {SPBprofile} from "./SPBprofile/SPBprofile";



export const SaintPetersburg = ()=>{
    return(
        <div className={css.content}>
            <SPBprofile/>
            <SPBpostsContainer/>
        </div>
    )
}