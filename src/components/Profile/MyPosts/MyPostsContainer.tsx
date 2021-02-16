import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostProfile, InitialProfileStateType, updeteNewPostChatProfile} from "../../../redux/Profile_Reducer";


export type ProfilePropsContainerType =  MapDispatchPropsType & MapStatePropsType

type MapDispatchPropsType = {
    updeteNewPostChatProfile: (text:string)=>void
    addPostProfile: () =>void
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
        updeteNewPostChatProfile: (text:string)=>{
            dispatch(updeteNewPostChatProfile(text))
        },
        addPostProfile:()=>{
            dispatch(addPostProfile())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)