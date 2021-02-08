import {SideBar} from "./SideBar";
import { connect } from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps = (state:AppStateType) =>{
    return {
        friends:state.sidebar.friends
    }
}
let mapDispatch = (dispatch:undefined) =>{
    return {

    }
}
export const SideBarContainer = connect (mapStateToProps,mapDispatch)(SideBar)
