import {Bonus} from "./Bonus";
import {connect} from "react-redux";
import {  InitialBonusStateType, AddPostBonus} from "../../redux/Bonus-reducer/Bonus_reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";

export type BonusPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    bonusPage: InitialBonusStateType
    isAuth:boolean
}

type MapDispatchPropsType = {
    addPostBonusText: (values:string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        bonusPage: state.bonusPage,
        isAuth: state.auth_user.isAuth
    }
}


let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostBonusText: (values:string) => {
            dispatch(AddPostBonus(values))
        },

    }
    }



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Bonus)

/*let AuthRedirectBonus = WithAuthRedirect(Bonus)

export const BonusContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectBonus)*/


