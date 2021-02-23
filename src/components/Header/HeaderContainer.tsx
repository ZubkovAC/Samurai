import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth_reducer";
import {usersAPI} from "../../api/Api";



type MapAllHeaderComponentPropsType = MapStateToPropsType &{
    setAuthUserData:(id:number,email:string,login:string)=>void
}

export class HeaderAPIContainer  extends React.Component < MapAllHeaderComponentPropsType >{
    componentDidMount(){
        usersAPI.getLogin()
                .then(data => {
                  if(data.resultCode ===0){
                      let {id,email,login}=data.data
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
/*const MapDispatchToProps = (dispatch:Dispatch)=>({

})*/

export const HeaderContainer = connect(MapStateToProps,{setAuthUserData})(HeaderAPIContainer)