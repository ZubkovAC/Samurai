import React from "react";
import css from "./SaintPetersburg.module.css";
import {SPBprofile} from "./SPBprofile/SPBprofile";
import SPBpostsContainer from "./SPBposts/SPBpostsContainer";



export const SaintPetersburg = ()=>{
    return(
        <div className={css.content}>
            <SPBprofile/>
            <SPBpostsContainer/>
        </div>
    )
}