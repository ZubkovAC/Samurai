import css from "../Bonus.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogsItemPropsType={
    id:number
    name:string
    img:string
}
export const DialogItem = (props:DialogsItemPropsType) =>{
    return (
        <div className={css.name}>
            <img src={props.img} alt=""/>
            <NavLink to={'/Bonus/'+props.id} activeClassName={css.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
