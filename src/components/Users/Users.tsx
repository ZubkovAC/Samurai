import React from "react";
import {UserType} from "../../redux/Users_reducer";
import  axios from "axios";
import css from './users.module.css'

type UserPropsType = {
    users:UserType[]
    followAC:(idUser:number)=>void
    unfollowAC:(idUser:number)=>void
    setUsers:(users: UserType[]) => void
    pageSize:number
    totalUsersCount:number
    currentPage:number
    setCurrentPageAC:(page:number)=>void
    setTotalCountAC:(users:number)=>void
}

export class Users extends React.Component<UserPropsType>{

    componentDidMount(): void {

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCountAC(response.data.totalCount)
        })
    }

    onPageChanged = (p:number) => {
        this.props.setCurrentPageAC(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let x = 1 ; x <= pagesCount; x ++){
            pages.push(x)
        }
        return (
            <div>
                <div>
                    {pages.map( p =>{
                        return <span className={ this.props.currentPage === p ? css.selectedPage : '' } onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <div>
                                    <img src={u.img?u.img:'https://pbs.twimg.com/profile_images/948912339977457664/kKj0B_jV_400x400.jpg'} alt={u.name} width='50px'/>
                                    {u.followed
                                        ? <button onClick={()=>{this.props.unfollowAC(u.id)}}>follow</button>
                                        : <button onClick={()=>{this.props.followAC(u.id)}}>unfollow</button>
                                    }
                                </div>
                                <div>
                                    {u.name}
                                    <br/>
                                    {u.title?u.title:''}
                                </div>
                                <div>
                                    {u.country?u.country:''}
                                    <br/>
                                    {u.city?u.city:''}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
