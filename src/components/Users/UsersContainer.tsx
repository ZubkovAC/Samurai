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
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type  MapAllUsersProps = MapStateUsersProps & MapDispatchUsersProps
type MapStateUsersProps = {
    users:  UserType [] | null
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
type MapDispatchUsersProps ={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:UserType[]) =>void
    setCurrentPage:(pageNumber:number) =>void
    setTotalCount:(pageNumber:number) =>void
    setIsFetching:(fetching:boolean)=>void
}


export class UsersApiComponent extends React.Component<MapAllUsersProps>{

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
            users={this.props.users?this.props.users:null }
            unfollow={this.props.unfollow}
            follow={this.props.follow}

        />
        </>
    }
}


let mapStateToProps = (state:AppStateType ) :MapStateUsersProps => {
    return{
        users:state.users.users ,
        pageSize: state.users.pageSize,
        totalUsersCount:state.users.totalUsersCount,
        currentPage:state.users.currentPage,
        isFetching: state.users.isFetching
    }
}


let mapDispatchToProps = (dispatch:Dispatch):MapDispatchUsersProps => {
    return {
        follow:(userID:number)=>{
            dispatch(follow(userID))
        },
        unfollow:(userID:number)=>{
            dispatch(unfollow(userID))
        },
        setUsers:(users:UserType[]) => {
            dispatch(setUsers(users))
        },
        setCurrentPage:(pageNumber:number) => {
            dispatch(setCurrentPage(pageNumber))
        },
        setTotalCount:(totalCount:number) => {
            dispatch(setTotalCount(totalCount))
        },
        setIsFetching:(fetching:boolean)=> {
            dispatch(setIsFetching(fetching))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent)



/*follow,unfollow,setUsers,setCurrentPage,setTotalCount,setIsFetching*/




