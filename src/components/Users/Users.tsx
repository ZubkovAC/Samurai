import React from "react";
import { UserType} from "../../redux/Users-reducer/Users_reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    follow: (idUser: number) => void
    unfollow: (idUser: number) => void
    folloingInProgress:number[]
}

export const Users =React.memo( ({
                                     users,pageSize,totalUsersCount,currentPage,
                                     onPageChanged,follow,unfollow,folloingInProgress}:UsersPropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            {

                users.map(users => <User key={users.id} follow={follow} folloingInProgress={folloingInProgress}
                                      unfollow={unfollow} user={users}/>


                )
            }
        </div>
    )
})

