import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfilePropsType,
    setUserProfile, setUserStatus, updateStatus,
} from "../../redux/Profile-reducer/Profile_Reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/preloader";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {getIsAuth, getProfile, getUserId, getStatusProfile, getAuthorizeUserId} from "../../redux/users-selesctors";

type PathParamsType ={
    userId:string

}
type MapStateToPropsType = {
    profile: ProfilePropsType | null
    userId:number
    status:string
    isAuth:boolean
    authorizeUserId:number
}


type MapDispatchPropsType = {
    setUserProfile: (userId:number)=>void
    setUserStatus: (userId:number)=>void
    updateStatus: (status:string)=>void

}


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchPropsType & PathParamsType
type CommonPropsType = RouteComponentProps <PathParamsType> & ProfileContainerPropsType


export class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount(): void {
        let userId= +this.props.match.params.userId
        if (!userId){
            userId=this.props.authorizeUserId
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.setUserStatus(userId)
        this.props.setUserProfile(userId)
    }

    render() {

        return (
             this.props.profile ?

                 <Profile {...this.props}  profile={this.props.profile} status={this.props.status}
                          updateStatus={this.props.updateStatus}/> :  <Preloader/>
        )
    }
}

let mapStateToProps = (state: AppStateType) :MapStateToPropsType => ({

    profile: getProfile(state),
    userId:getUserId(state),
    status:getStatusProfile(state),
    isAuth:getIsAuth(state),
    authorizeUserId:getAuthorizeUserId(state)

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile,setUserStatus,updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


