import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile,} from "../../redux/Profile_Reducer";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader";


type MapStateToPropsType = {
    profile: ProfilePropsType | null
}
type MapDispatchPropsType = {
    setUserProfile: (data: ProfilePropsType) => void
}

class ProfileContainer extends React.Component<MapStateToPropsType & MapDispatchPropsType> {
    componentDidMount(): void {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)