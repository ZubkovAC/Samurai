import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostProfile, InitialProfileStateType} from "../../../redux/Profile-reducer/Profile_Reducer";


export type ProfilePropsContainerType =  MapDispatchPropsType & MapStatePropsType

type MapDispatchPropsType = {
    addPostProfile: (value:string) =>void
}
type MapStatePropsType = {
    profile:InitialProfileStateType
}





let mapStateToProps = (state:AppStateType) : MapStatePropsType  =>{
    return {
        profile:state.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType =>{
    return {
        addPostProfile:(value:string)=>{
            dispatch(addPostProfile(value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)