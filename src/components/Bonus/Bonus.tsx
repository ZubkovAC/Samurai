import React from "react";
import css from './Bonus.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType={
    id:number
    name:string
}

type Message ={
    message:string
}

export const DialogItem = (props:DialogsItemPropsType) =>{



    return (
        <div className={css.name}>
            <NavLink to={'/Bonus/'+props.id} activeClassName={css.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

export const Message = (props:Message) =>{
    return (
        <div className={css.day}> {props.message}</div>
    )
}


export const Bonus  = () => {
    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                <DialogItem id={1} name={'Dumith'}/>
                <DialogItem id={2} name={'Andrey'}/>
                <DialogItem id={3} name={'Sveta'}/>
                <DialogItem id={4} name={'Valera'}/>
                <DialogItem id={5} name={'Sasha'}/>
                <DialogItem id={6} name={'Viktor'}/>
                <DialogItem id={7} name={'Ac'}/>
            </div>
            <div>
                <Message message={'Good morning'}/>
                <Message message={'Good after'}/>
                <Message message={'Good nigth'}/>

            </div>
        </div>
    )
}