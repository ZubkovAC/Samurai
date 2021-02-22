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
import {Users} from './Users';
import {Preloader} from "../common/preloader";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {getUsers} from "../../api/Api";


type  MapAllUsersProps = MapStateUsersProps & MapDispatchUsersProps
type MapStateUsersProps = {
    users:  UserType []
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

        getUsers(this.props.currentPage , this.props.pageSize)

            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)

        getUsers(pageNumber , this.props.pageSize)

            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
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
            users={this.props.users }
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




