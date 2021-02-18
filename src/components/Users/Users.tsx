import React from "react";
import {UserType} from "../../redux/Users_reducer";
import css from './users.module.css'
import {NavLink} from "react-router-dom";

type UserPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (idUser: number) => void
    unfollow: (idUser: number) => void
}

export const Users = (props: UserPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let x = 1; x <= pagesCount; x++) {
        pages.push(x)
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? css.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {

                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <div>
                                <div>
                                    <NavLink to={'/Profile/'+ u.id} >
                                    <img src={u.photos.small ? u.photos.small :
                                        'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'}
                                         alt={u.name} width='100px'/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>follow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }}>unfollow</button>
                                    }
                                </div>

                            </div>
                            <div>
                                {u.name}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

