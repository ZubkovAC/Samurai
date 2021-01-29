import React from "react";
import css from './Bonus.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ProfilePagePropsType} from "../../redux/store";

type BonusPropsType = {
    onPostChangeCreator:any
    profilePage:ProfilePagePropsType
    addPostActionCreator:any
}

export const Bonus  = (props:BonusPropsType) => {

    let messageData = props.profilePage.messagesData.map( t => <Message  message={t.message}/>)
    let dialogData = props.profilePage.dialogsData.map( t => <DialogItem id={t.id} name={t.name} img={t.img}/>)

    let newPostElement = React.createRef<any>()
    let addPostChat = ()=>{
        props.addPostActionCreator()
    }

    const onPostChange = () =>{
        let text = newPostElement.current.value
        props.onPostChangeCreator(text)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.box}>
                { dialogData }
            </div>
            <div>
                { messageData }
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText} />
                <div>
                    <button onClick={addPostChat}>add</button>
                </div>
            </div>
        </div>
    )
}