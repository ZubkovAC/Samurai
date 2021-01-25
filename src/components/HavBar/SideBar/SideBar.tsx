import React from 'react';
import css from './SideBar.module.css'
import { friendsPropsType } from '../../../redux/store';

export type SideBarPropsType = {
    friends:friendsPropsType[]
}


export const SideBar = (props: SideBarPropsType) => {
    return (
        <div className={css.Box_friends} >
            <div className={css.Class}>
            Friends
            </div>
            <div className={css.friends}>

                {
                    props.friends.map(t =><div key={t.id}> <img src={t.img} alt="img"/>{t.name}</div>)
                }
            </div>
        </div>
    )
}