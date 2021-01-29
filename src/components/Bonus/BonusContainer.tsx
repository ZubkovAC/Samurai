import React from "react";
import {
    addPostActionCreator,
    DispatchAddPropsType,
    DispatchPropsType,
    onPostChangeCreator
} from "../../redux/store";
import {Bonus} from "./Bonus";

type BonusPropsType = {

    dispatch:(action:DispatchPropsType|DispatchAddPropsType)=>void
    state:any
}

export const BonusContainer  = (props:BonusPropsType) => {

    //let state = props.state.getState().dialogsPage

    let newPostElement = React.createRef<any>()
    let addPostChat = ()=>{
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (text:any) =>{
        props.dispatch(onPostChangeCreator(text))
    }

    return <Bonus
        onPostChangeCreator={onPostChange}
        addPostActionCreator={addPostChat}
        profilePage={props.state.profilePage}
    />
}