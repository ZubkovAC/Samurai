import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    ProfilePropsType,
    setUserProfile, setUserStatus, updateStatus,
} from "../../redux/Profile_Reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/preloader";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType ={
    userId:string //| any

}
type MapStateToPropsType = {
    profile: ProfilePropsType | null
    userId:number
    status:string                                       // any
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
            userId=14510
        }
        debugger
        this.props.setUserStatus(userId)
        this.props.setUserProfile(userId)

        //this.props.updateStatus(status)
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

    profile: state.profile.profile,
    userId:state.profile.userId,
    status:state.profile.status

})



export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile,setUserStatus,updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)


/*
let AuthRedirectProfileContainer = WithAuthRedirect (ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectProfileContainer)

export default connect<MapStateToPropsType, MapDispatchPropsType, any, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)*/
