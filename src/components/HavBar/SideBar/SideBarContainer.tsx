import css from "./SideBar.module.css";
import React from "react";
import {SideBar} from "./SideBar";
import {friendsPropsType} from "../../../redux/store";
import { connect } from "react-redux";
import {AppStateType, AppStoreType} from "../../../redux/redux-store";


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
