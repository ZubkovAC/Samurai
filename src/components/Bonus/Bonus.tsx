import React from "react";
import css from './Bonus.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {BonusPropsType} from "./BonusContainer";
import { Redirect } from "react-router-dom";


export const Bonus = (props: BonusPropsType) => {

    let messageData = props.bonusPage.messagesBonusData.map(t => <Message message={t.message}/>)

    let dialogData = props.bonusPage.dialogsBonusData.map(t => <DialogItem id={t.id} name={t.name} img={t.img}/>)

    let newPostElement = React.createRef<any>()
    let addPostChat = () => {
        props.addPostText()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    if (props.isAuth) return<Redirect to={'/Login'}/>

    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                {dialogData}
            </div>
            <div>
                {messageData}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.bonusPage.newBonusText}/>
                <div>
                    <button onClick={addPostChat}>add</button>
                </div>
            </div>
        </div>
    )
}