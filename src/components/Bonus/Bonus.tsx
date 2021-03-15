import React from "react";
import css from './Bonus.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {BonusPropsType} from "./BonusContainer";
import {BonusReduxForm} from "../../Login/Login";

export type BonusType ={
    BonusTextarea:string
}

export const Bonus = (props: BonusPropsType) => {

    let messageData = props.bonusPage.messagesBonusData.map(t => <Message message={t.message}/>)

    let dialogData = props.bonusPage.dialogsBonusData.map(t => <DialogItem id={t.id} name={t.name} img={t.img}/>)
    debugger

    let addPostMessageText = (values: BonusType) => {

        props.addPostBonusText(values.BonusTextarea)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                {dialogData}
            </div>
            <div>
                {messageData}
                <BonusReduxForm onSubmit={addPostMessageText}/>

            </div>

        </div>
    )
}
