import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logOut} from "../../redux/Auth-reducer/auth_reducer";


export class HeaderAPIContainer extends React.Component <MapStateToPropsType & MapDispatchToProps> {

    render() {
        return <Header
            login={this.props.login}
            logOut={this.props.logOut}
            isAuth={this.props.isAuth}
        />
    }
}

type MapDispatchToProps = {
    logOut:()=>void
}

type MapStateToPropsType = {
    login: string,
    isAuth: boolean,
}
let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth_user.login,
        isAuth: state.auth_user.isAuth,
    }
}

export const HeaderContainer = connect(MapStateToProps, {logOut})(HeaderAPIContainer)