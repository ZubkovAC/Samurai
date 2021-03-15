import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logOut} from "../../redux/auth_reducer";



type MapAllHeaderComponentPropsType = MapStateToPropsType &{
    getAuthUserData:(id:number ,email:string,login:string)=>void
}

export class HeaderAPIContainer  extends React.Component < MapAllHeaderComponentPropsType >{
    componentDidMount(){
        this.props.getAuthUserData(this.props.userId,this.props.email,this.props.login)
    }

    render(){
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType ={
    userId:number ,
    email:string,
    login:string,
    isAuth:boolean,
}
let  MapStateToProps = (state:AppStateType):MapStateToPropsType=>{
    return{
        userId:state.auth_user.userId,
        email:state.auth_user.email,
        login:state.auth_user.login,
        isAuth:state.auth_user.isAuth,
    }
}

export const HeaderContainer = connect(MapStateToProps,{getAuthUserData,logOut})(HeaderAPIContainer)