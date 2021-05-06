import React from "react";
import {UserType} from "../../redux/Users-reducer/Users_reducer";
import {NavLink} from "react-router-dom";
import css from './users.module.css'

type UserPropsType = {
    user: UserType
    follow: (idUser: number) => void
    unfollow: (idUser: number) => void
    folloingInProgress: number[]

}

export const User = React.memo(({
                                    user, follow, unfollow, folloingInProgress
                                }: UserPropsType) => {
    let userStatus
    if (user.status != null){
        // @ts-ignore
            userStatus = user.status.substr(0,15)
        }





    return (
        <div key={user.id} >
            <div  className={css.table}>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small :
                        'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'}
                         alt={user.name} width='150px'/>
                </NavLink>
                <div style={{padding:'20px'}} >
                    <b style={{fontSize:'18px'}}>{user.name}</b>
                   <div> {userStatus}</div>

                    {!user.followed
                        ? <div style={{paddingTop:'20px'}}>
                            <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>follow</button>
                        </div>

                        : <div style={{paddingTop:'20px'}}>
                            <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>unfollow</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
})
