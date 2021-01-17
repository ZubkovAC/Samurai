import React from "react";
import css from './Bonus.module.css'
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type BonusPropsType = {
    messagesData:Message[]
    dialogsData:DialogsItemPropsType[]

}

export const Bonus  = (props:BonusPropsType) => {

    let messageData = props.messagesData.map( t => <Message  message={t.message}/>)

    let dialogData = props.dialogsData.map( t => <DialogItem id={t.id} name={t.name} img={t.img}/>)

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