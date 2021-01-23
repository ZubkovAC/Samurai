import React from "react";
import css from './Bonus.module.css'
import {DialogItem, DialogsItemPropsType} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type BonusPropsType = {
    messagesData:Message[]
    dialogsData:DialogsItemPropsType[]
    newPostText:string

    dispatch:any
}

export const Bonus  = (props:BonusPropsType) => {

    let messageData = props.messagesData.map( t => <Message  message={t.message}/>)
    let dialogData = props.dialogsData.map( t => <DialogItem id={t.id} name={t.name} img={t.img}/>)


    let newPostElement = React.createRef<any>()
    let addPostChat = ()=>{
        props.dispatch({type:'ADD-POST-CHAT'})
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text})
    }


    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                { dialogData }
            </div>
            <div>
                { messageData }
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <div>
                    <button onClick={addPostChat}>add</button>
                </div>

            </div>

        </div>
    )
}