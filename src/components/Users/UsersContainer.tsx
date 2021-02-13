import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from "../../redux/Users_reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";


let mapStateToProps = (state:any ) => {
    return{
        users:state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
    }
}
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

export class UsersApiComponent extends React.Component<UserPropsType>{

    componentDidMount(): void {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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


        return <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollowAC={this.props.unfollowAC}
            followAC={this.props.followAC}

        />
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        followAC:(userID:number)=>{
            dispatch(followAC(userID))
        },
        unfollowAC:(userID:number)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPageAC:(pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCountAC:(totalCount:number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent)








