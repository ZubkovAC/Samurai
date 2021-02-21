import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth_reducer";



type MapAllHeaderComponentPropsType = MapStateToPropsType &{
    setAuthUserData:(id:number,email:string,login:string)=>void
}

export class HeaderAPIContainer  extends React.Component < MapAllHeaderComponentPropsType >{
    componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
                withCredentials:true
            })
                .then(response => {
                  if(response.data.resultCode ===0){
                      let {id,email,login}=response.data.data
                      this.props.setAuthUserData(id,email,login)
                  }
                })

    }


    render(){
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType ={
    userId:number,
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
const MapDispatchToProps = (dispatch:Dispatch)=>({

})

export const HeaderContainer = connect(MapStateToProps,{setAuthUserData})(HeaderAPIContainer)