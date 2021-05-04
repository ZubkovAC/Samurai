import React from "react";
import css from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export const Header = (props:any)=>{
    return (
        <div className={css.header} >
            <div >

                <span className={css.loginBlock}>
                     <span className={css.text}>советская социальная газета</span>
                    {props.isAuth
                        ? <span  className={css.text2}>{props.login} <button onClick={props.logOut}>Log Out</button></span>
                        : <NavLink className={css.text2} to={'/login'} >Login</NavLink>
                    }
                </span>

            </div>
        </div>
    )
}
