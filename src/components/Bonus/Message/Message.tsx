import css from "../Bonus.module.css";
import React from "react";

export type Message ={
    message:string
}


export const Message = (props:Message) =>{
    return (
        <div className={css.day}> {props.message}</div>
    )
}
