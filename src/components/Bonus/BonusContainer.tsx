import {Bonus} from "./Bonus";
import {connect} from "react-redux";
import { UpdateNewPostTextAC, AddPostTextAC, InitialBonusStateType} from "../../redux/Bonus_reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type BonusPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    bonusPage: InitialBonusStateType
}

type MapDispatchPropsType = {
    addPostText: () => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        bonusPage: state.bonusPage
    }
}

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

export const BonusContainer = connect(mapStateToProps, mapDispatchToProps)(Bonus)


/*

return {
    AddPostTextAC:()=>{
        dispatch(AddPostTextAC())
    },
    UpdateNewPostTextAC:(text:string)=>{
        dispatch(UpdateNewPostTextAC(text))
    }
}
AddPostTextAC(), UpdateNewPostTextAC(text:string)
}*/
