import React from "react";
import css from './NizhnyNovgorod.module.css'

const NizhnyNovgorod  =React.memo( () => {
    return (
        <div className={css.dialogs}>
            <img src="https://www.tury.ru/img.php?gid=75383&pid=270528&v=1200" alt="Moscow_river_night"/>
            <div>
                Dialogs
            </div>
        </div>
    )
})
export default NizhnyNovgorod