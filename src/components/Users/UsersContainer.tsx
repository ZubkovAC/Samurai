import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/Users_reducer";
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from "../common/preloader";



type UserPropsType = {
    users:UserType[]
    follow:(idUser:number)=>void
    unfollow:(idUser:number)=>void
    setUsers:(users: UserType[]) => void
    pageSize:number
    totalUsersCount:number
    currentPage:number
    setCurrentPage:(page:number)=>void
    setTotalCount:(users:number)=>void
    setIsFetching:any
    isFetching:boolean | null
}

export class UsersApiComponent extends React.Component<UserPropsType>{

    componentDidMount(): void {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (p:number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render(){


        return<>
            {this.props.isFetching ?  <Preloader />:null}

            <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}

        />
        </>
    }
}
let mapStateToProps = (state:any ) => {
    return{
        users:state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
        isFetching: state.users.isFetching
    }
}
/*let mapDispatchToProps = (dispatch:any) => {
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
        },
        setIsFetchingAC:(fetching:any)=> {
            dispatch(setIsFetchingAC(fetching))
        }
    }
}*/
export const UsersContainer = connect(mapStateToProps,{
        follow,unfollow,setUsers,setCurrentPage,setTotalCount,setIsFetching
})(UsersApiComponent)








