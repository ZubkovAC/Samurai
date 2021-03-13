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
import {Preloader} from "../common/Preloader/preloader";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



type  MapAllUsersProps = MapStateUsersProps & MapDispatchUsersProps
type MapStateUsersProps = {
    users:  UserType []
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
    followingInProgress:number[]
    isAuth:boolean
}
export type MapDispatchUsersProps ={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setCurrentPage:(pageNumber:number) =>void
    setIsFollowingProgress:(followingInProgress:boolean,userId:number)=>void
    getUsersThunkCreator:(currentPage:any,pageSize:any)=>void
}


class UsersApiComponent extends React.Component<MapAllUsersProps>{

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
        followingInProgress:state.users.followingInProgress,
        isAuth:state.auth_user.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
    {follow,unfollow,setCurrentPage,
        setIsFollowingProgress,getUsersThunkCreator
    }),WithAuthRedirect)(UsersApiComponent)


/*
let AuthRedirectUsersApiComponent = WithAuthRedirect(UsersApiComponent)


export const UsersContainer = connect(mapStateToProps,
    {follow,unfollow,setCurrentPage,
        setIsFollowingProgress,getUsersThunkCreator
    })(AuthRedirectUsersApiComponent)
*/








