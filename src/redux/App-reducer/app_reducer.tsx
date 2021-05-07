
import {getAuthUserData} from "../Auth-reducer/auth_reducer";



export const AppReducer = (state: initialazedStateType = initialState, action: UserActionType): initialazedStateType => {
    switch (action.type) {
        case "APP/SET-INITIALAZED":
            return {...state, initialazed: true }
        default :
            return state
    }
}
//AC
export const setInitialazed = () =>
    ({type: 'APP/SET-INITIALAZED'} as const)


//TC
export const initialazedSuccessApp  = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then((res) => {
        dispatch(setInitialazed());
    });


}

//Type
export type initialazedStateType = typeof initialState

let initialState = {
    initialazed: false

}

export type SetInitialazedAC = ReturnType<typeof setInitialazed>

export type UserActionType =
    SetInitialazedAC
