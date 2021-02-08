import {
    addPostActionCreator,
    DispatchAddPropsType,
    DispatchPropsType,
    onPostChangeCreator, StatePropsType
} from "../../redux/store";
import {Bonus} from "./Bonus";
import {connect} from "react-redux";

type BonusPropsType = {

    dispatch: (action: DispatchPropsType | DispatchAddPropsType) => void
    state: any
}


let mapStateToProps = (state:StatePropsType) =>{
    return {
        profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch : (action: DispatchPropsType | DispatchAddPropsType) => void) =>{
    return {
        addPostActionCreator:()=>{
            dispatch(addPostActionCreator())
        },
        onPostChangeCreator:(text:any)=>{
            dispatch(onPostChangeCreator(text))
        }
    }
}

export const BonusContainer = connect(mapStateToProps,mapDispatchToProps)(Bonus)