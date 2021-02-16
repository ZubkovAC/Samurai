import {SPBposts} from "./SPBposts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostChatSPB, InitialSPBStateType, updateNewPostChatSPB} from "../../../redux/SPB_Reducer";


export type MapAlltoSpbPropsType = MapStateToSpbPropsType & MapDispatchToSpbPropsType

type MapStateToSpbPropsType = {
    messagesSpbPage:InitialSPBStateType
}
type MapDispatchToSpbPropsType = {
    updateNewPostChatSPB:(text:string)=>void
    addPostChatSPB:()=>void
}

let mapStateToProps = (state:AppStateType) :MapStateToSpbPropsType =>{
    return {
        messagesSpbPage:state.messagesSpbPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToSpbPropsType =>{
    return {
        updateNewPostChatSPB: (text:string)=>{
            dispatch(updateNewPostChatSPB(text))
        },
        addPostChatSPB:()=>{
            dispatch(addPostChatSPB())
        }
    }
}

export const SPBpostsContainer = connect(mapStateToProps,mapDispatchToProps)(SPBposts)