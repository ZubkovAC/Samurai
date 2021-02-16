import React from "react";
import css from './SPBprofileInfo.module.css'

export const SPBprofile = () =>{
    return(
        <div className={css.ProfileInfo}>
            <div>
                <img src="https://krasivye-mesta.ru/img/Palace-Square.jpg" alt="SaintP"/>
            </div>
            <div>
                photo+discription
            </div>
        </div>
    )
}