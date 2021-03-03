import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile,} from "../../redux/Profile_Reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";
import {usersAPI} from "../../api/Api";

type PathParamsType ={
    userId:string //| any
}
type MapStateToPropsType = {
    profile: ProfilePropsType | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    setUserProfile: (userId:number)=>void
}


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchPropsType & PathParamsType
type CommonPropsType = RouteComponentProps <PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount(): void {
        let userId= +this.props.match.params.userId
        if (!userId){
            userId=14510
        }
        this.props.setUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return<Redirect to={'/Login'}/>
        return (
             this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> :  <Preloader/>
        )
    }
}

let mapStateToProps = (state: AppStateType) :MapStateToPropsType => ({
    profile: state.profile.profile,
    isAuth:state.auth_user.isAuth
})


interface MatchParams {
    userId: string;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchPropsType, any, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)