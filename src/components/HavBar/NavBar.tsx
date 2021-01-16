import React from "react";
import css from './NavBar.module.css'
import {NavLink} from "react-router-dom";

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
                    <NavLink to='/Bonus' activeClassName={css.active}>
                        Bonus
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
// https://avatars.mds.yandex.net/get-pdb/1790044/18f84dac-7929-4ec7-a292-0a2247d2c446/s1200