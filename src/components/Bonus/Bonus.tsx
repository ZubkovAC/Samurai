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

    let dialogsData = [
        {id:1 , name:'Dimych'},
        {id:2 , name:'Andrey'},
        {id:3 , name:'Sveta'},
        {id:4 , name:'Valera'},
        {id:5 , name:'Sasha'},
        {id:6 , name:'Viktor'},
        {id:7 , name:'Ac'},
    ]

    let messagesData = [
        {id:1, message:'Good morning'},
        {id:2, message:'Good after'},
        {id:3, message:'Good nigth'},
        {id:4, message: "The future is created in your Head"},
        {id:5, message: "You can't easily pull a fish out of a pond"},
        {id:6, message: "Patience and hard work will wear everything out"},
        {id:7, message: "morning in the evening is more complicated"},
    ]

    let messageData = messagesData.map( t=> <Message message={t.message}/>)
    let dialogData = dialogsData.map( t=> <DialogItem id={t.id} name={t.name}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                { dialogData }
            </div>
            <div>
                { messageData }
            </div>
        </div>
    )
}