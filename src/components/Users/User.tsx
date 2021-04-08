import React from "react";
import {UserType} from "../../redux/Users-reducer/Users_reducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    user: UserType
    follow: (idUser: number) => void
    unfollow: (idUser: number) => void
    folloingInProgress: number[]

}

export const User = React.memo(({
                                    user, follow, unfollow, folloingInProgress
                                }: UserPropsType) => {

    return (
        <div>
            <div key={user.id}>
                <div>
                    <div>
                        <NavLink to={'/Profile/' + user.id}>
                            <img src={user.photos.small ? user.photos.small :
                                'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'}
                                 alt={user.name} width='100px'/>
                        </NavLink>
                    </div>
                    <div>
                        {!user.followed

                            ? <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)

                            }}>follow</button>

                            : <button disabled={folloingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>unfollow</button>

                        }
                    </div>
                </div>
                <div>
                    {user.name}
                </div>
            </div>
        </div>
    )
})
