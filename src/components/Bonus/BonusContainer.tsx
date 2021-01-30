import React from "react";
import {
    addPostActionCreator,
    DispatchAddPropsType,
    DispatchPropsType,
    onPostChangeCreator, StoreType
} from "../../redux/store";
import {Bonus} from "./Bonus";
import {StoreContext} from "../../StoreContext";
import {AppStoreType} from "../../redux/redux-store";

type BonusPropsType = {

    dispatch: (action: DispatchPropsType | DispatchAddPropsType) => void
    state: any
}

export const BonusContainer = () => {


    return <StoreContext.Consumer>
        {(store:AppStoreType) => {
            let state = store.getState().profilePage

            let newPostElement = React.createRef<any>()
            let addPostChat = () => {
                store.dispatch(addPostActionCreator())
            }

            const onPostChange = (text: any) => {
                store.dispatch(onPostChangeCreator(text))
            }
            return  <Bonus
                onPostChangeCreator={onPostChange}
                addPostActionCreator={addPostChat}
                profilePage={state}
            />
        }}
    </StoreContext.Consumer>
}