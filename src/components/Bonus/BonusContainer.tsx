import {Bonus} from "./Bonus";
import {connect} from "react-redux";
import { UpdateNewPostTextAC, AddPostTextAC, InitialBonusStateType} from "../../redux/Bonus_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

export type BonusPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    bonusPage: InitialBonusStateType
    isAuth:boolean
}

type MapDispatchPropsType = {
    addPostText: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        bonusPage: state.bonusPage,
        isAuth: state.auth_user.isAuth
    }
}

let AuthRedirectBonus = WithAuthRedirect(Bonus)

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostText: () => {
            dispatch(AddPostTextAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text))
        }
    }
}

export const BonusContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectBonus)


