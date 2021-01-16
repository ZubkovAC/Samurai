import React from "react";
import  css from './NavBar.module.css'

export const NavBar = () =>{
    return (
        <div className={css.nav} >
            <nav  >
                <div>
                    Moscow
                </div>
                <div>
                    Saint Petersburg
                </div>
                <div>
                    Kazan
                </div>
                <div>
                    Nizhny Novgorod
                </div>
                <div>
                   Yekaterinburg
                </div>
                <div>
                    Bonus
                </div>
            </nav>
        </div>
    )
}
// https://avatars.mds.yandex.net/get-pdb/1790044/18f84dac-7929-4ec7-a292-0a2247d2c446/s1200