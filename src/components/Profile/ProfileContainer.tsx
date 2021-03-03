import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile,} from "../../redux/Profile_Reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {usersAPI} from "../../api/Api";

type PathParamsType ={
    userId:string //| any
}
type MapStateToPropsType = {
    profile: ProfilePropsType | null
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
        return (
             this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> :  <Preloader/>
        )
    }
}

let mapStateToProps = (state: AppStateType) :MapStateToPropsType => ({
    profile: state.profile.profile
})


interface MatchParams {
    userId: string;
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchPropsType, any, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)