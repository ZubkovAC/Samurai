import React from 'react';
import css from './SideBar.module.css'
import {FriendsInitialType} from "../../../redux/Side_bar-reducer/side_bar-reducer";


export type SideBarPropsType = {
    friends: FriendsInitialType[]
}

export const SideBar = (props:SideBarPropsType) => {
    return <div className={css.Box_friends}>
        <div className={css.Class}>
            Friends
        </div>
        <div className={css.friends}>
            {
                props.friends.map(t => <div key={t.id}><img src={t.img} alt="img"/>{t.name}</div>)
            }
        </div>
    </div>
}




