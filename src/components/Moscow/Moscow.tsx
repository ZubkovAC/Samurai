import React from "react";
import css from './Moscow.module.css'


const Moscow  =React.memo( () => {
    return (
        <div className={css.dialogs}>
            <img src="https://img.lookmytrips.com/images/look6i2i/5840836fff9367121c02e9fc-5a830dcc49d57-1d863ec-lbcvr.jpg" alt="Moscow_river_night"/>
            <div>
                Dialogs
            </div>
        </div>
    )
})
export default Moscow