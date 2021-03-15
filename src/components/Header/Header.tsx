import React from "react";
import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = (props:any)=>{
    return (
        <div className={css.header} >
            <header >
                <img src="https://www.clipartmax.com/png/middle/27-279823_heart-rate-clip-art-image-pulse-svg.png" height='60px' alt="back-body"/>
                <div className={css.loginBlock}>
                    {props.isAuth
                        ? <h3 style={{margin:'0px'}}>{props.login} <button onClick={props.logOut}>Log Out</button></h3>
                        : <NavLink to={'/login'} >Login</NavLink>
                    }
                </div>

            </header>
        </div>
    )
}
