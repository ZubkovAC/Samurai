
import {getAuthUserData} from "../Auth-reducer/auth_reducer";


let initialState = {
    initialazed: false

}

export type initialazedStateType = typeof initialState

export const AppReducer = (state: initialazedStateType = initialState, action: UserActionType): initialazedStateType => {
    switch (action.type) {
        case "APP/SET-INITIALAZED":
            return {
                ...state,
                initialazed: true
            }

        default :
            return state
    }
}

export const setInitialazed = () =>
    ({type: 'APP/SET-INITIALAZED'} as const)


export const initialazedSuccessApp  = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then((res) => {
        dispatch(setInitialazed());
    });


}


export type SetInitialazedAC = ReturnType<typeof setInitialazed>
export type UserActionType =
    SetInitialazedAC
