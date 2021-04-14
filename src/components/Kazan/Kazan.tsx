import React from "react";
import css from './Kazan.module.css'

const Kazan  =React.memo( () => {
    return (
        <div className={css.dialogs}>
            <img src="https://img-fotki.yandex.ru/get/6847/30348152.18f/0_8087f_f83cc27b_orig" alt="Kazan"/>
            <div>
                Dialogs
            </div>
        </div>
    )
})
export default Kazan