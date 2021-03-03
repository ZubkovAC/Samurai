import {connect} from 'react-redux';
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
     setIsFollowingProgress,

    unfollow,
    UserType
} from "../../redux/Users_reducer";
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../common/preloader";
import {AppStateType} from "../../redux/redux-store";



type  MapAllUsersProps = MapStateUsersProps & MapDispatchUsersProps
type MapStateUsersProps = {
    users:  UserType []
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:number[]
}
export type MapDispatchUsersProps ={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setCurrentPage:(pageNumber:number) =>void
    setIsFollowingProgress:(followingInProgress:boolean,userId:number)=>void
    getUsersThunkCreator:(currentPage:any,pageSize:any)=>void
}


export class UsersApiComponent extends React.Component<MapAllUsersProps>{

    componentDidMount(): void {
        this.props.getUsersThunkCreator(this.props.currentPage , this.props.pageSize)

    }

    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

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
            folloingInProgress={this.props.followingInProgress}
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
        isFetching: state.users.isFetching,
        followingInProgress:state.users.followingInProgress
    }
}

/*
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
        },
        setIsFollowingProgress:(folloingInProgress:boolean,userId:number)=>{
            dispatch(setIsFollowingProgress(folloingInProgress,userId))
    },
        getUsersThunkCreator:(currentPage:any,pageSize:any)=>{
            dispatch(getUsersThunkCreator(currentPage,pageSize))
        }
    }
}*/
export const UsersContainer = connect(mapStateToProps,
    {follow,unfollow,setCurrentPage,
        setIsFollowingProgress,getUsersThunkCreator
    })(UsersApiComponent)








