import {combineReducers, createStore} from "redux";
import {bonusReducer} from "./Bonus_reducer";
import { sidebarReducer } from "./side_bar-reducer";
import {users_Reducer} from "./Users_reducer";
import {profile_Reducer} from "./Profile_Reducer";
import {SPB_Reducer} from "./SPB_Reducer";
import {auth_Reducer} from "./auth_reducer";


let rootReducer = combineReducers({
    messagesSpbPage:SPB_Reducer,
    bonusPage:bonusReducer,
    sidebar:sidebarReducer,
    users:users_Reducer,
    profile:profile_Reducer,
    auth_user:auth_Reducer
})
// типизация функции Reducer
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)
// типизация объекта store
export type AppStoreType = typeof store
