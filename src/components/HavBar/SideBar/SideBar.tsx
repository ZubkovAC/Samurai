import React from 'react';
import css from './SideBar.module.css'
import {friendsPropsType} from '../../../redux/store';
import {StoreContext} from "../../../StoreContext";

export type SideBarPropsType = {
    friends: friendsPropsType[]
}


export const SideBar = () => {
    return (<StoreContext.Consumer>
        {(store) => {
           return <div className={css.Box_friends}>
                <div className={css.Class}>
                    Friends
                </div>
                <div className={css.friends}>

                    {
                        store.getState().sidebar.friends.map(t => <div key={t.id}><img src={t.img} alt="img"/>{t.name}</div>)
                    }
                </div>
            </div>}}
        </StoreContext.Consumer>
        )
        }