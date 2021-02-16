import React from "react";
import css from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import { SideBarContainer } from "./SideBar/SideBarContainer";



export const NavBar = () => {
    return (
        <div className={css.nav}>
            <nav>
                <div className={css.nav}>
                    <NavLink to='/Moscow' activeClassName={css.active}>
                        Moscow
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/SaintPetersburg' activeClassName={css.active}>
                        SaintPetersburg
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Kazan' activeClassName={css.active}>
                        Kazan
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/NizhnyNovgorod' activeClassName={css.active}>
                        NizhnyNovgorod
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Yakaterinburg' activeClassName={css.active}>
                        Yakaterinburg
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Users' activeClassName={css.active}>
                        Users
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Profile' activeClassName={css.active}>
                        Profile
                    </NavLink>
                </div>
                <div className={css.nav}>
                    <NavLink to='/Bonus' activeClassName={css.active}>
                        Bonus
                    </NavLink>
                </div>
                <SideBarContainer  />

            </nav>
        </div>
    )
}
