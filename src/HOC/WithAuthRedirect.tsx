import {Redirect} from "react-router-dom"
import React, {ComponentType} from "react"
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

export type MapStateToPropsTypeRedirect = {
    isAuth:boolean
}
let mapStateToPropsRedirect = (state: AppStateType) :MapStateToPropsTypeRedirect => ({
    isAuth:state.auth_user.isAuth
})

export function WithAuthRedirect <T> (Component:ComponentType<T>) {
    function RedirectComponent(props:MapStateToPropsTypeRedirect) {

        let {isAuth,...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}
// return ConnectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)