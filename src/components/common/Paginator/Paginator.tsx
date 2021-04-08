import React from "react";
import css from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let x = 1; x <= pagesCount; x++) {
        pages.push(x)
    }

    return (
        <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? css.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
        </div>
    )
}
