import React from "react";
import css from './ProfileInfo.module.css'
import {ProfilePropsType} from "../../../redux/Profile_Reducer";

type MapStateToPropsType = {
    profile: ProfilePropsType
}

export const ProfileInfo = (props:MapStateToPropsType) =>{
        return(
            <div className={css.ProfileInfo}>
                <div>
                    <img src="https://krasivye-mesta.ru/img/Palace-Square.jpg" alt="SaintP"/>
                </div>
                <div>

                    <img src={props.profile.photos.large ?  props.profile.photos.large : '123' }/>

                    photo+discription
                </div>
            </div>
        )

}