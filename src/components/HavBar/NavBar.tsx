import React from "react";
import css from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import { SideBarContainer } from "./SideBar/SideBarContainer";



export const NavBar = () => {
    return (
        <div className={css.nav}>
            <nav>
                <div className={css.nav}>
                    <NavLink to='/Moscow' activeStyle={{color:'red'}}>
                        Moscow
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/SaintPetersburg' activeStyle={{color:'red'}}>
                        SaintPetersburg
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Kazan' activeStyle={{color:'red'}}>
                        Kazan
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/NizhnyNovgorod' activeStyle={{color:'red'}}>
                        NizhnyNovgorod
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Yakaterinburg' activeStyle={{color:'red'}}>
                        Yakaterinburg
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Users' activeStyle={{color:'red'}}>
                        Users
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Profile' activeStyle={{color:'red'}}>
                        Profile
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Bonus' activeStyle={{color:'red'}}>
                        Bonus
                    </NavLink>
                </div>
                <SideBarContainer  />

            </nav>
        </div>
    )
}
