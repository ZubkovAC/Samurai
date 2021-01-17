import React from "react";
import css from './ProfileInfo.module.css'

export const ProfileInfo = () =>{
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