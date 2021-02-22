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

                    <img src={props.profile.photos.large ?  props.profile.photos.large : 'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg' } alt='~error-photo - Profile-container~'/>

                    <h5>photo+discription</h5>
                </div>
            </div>
        )

}