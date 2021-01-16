import React from "react";
import css from "./Header.module.css";

export const Header = ()=>{
    return (
        <div className={css.header} >
            <header >
                <img src="https://www.clipartmax.com/png/middle/27-279823_heart-rate-clip-art-image-pulse-svg.png" height='60px' alt="back-body"/>
            </header>
        </div>
    )
}
