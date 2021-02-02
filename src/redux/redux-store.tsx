import {combineReducers, createStore} from "redux";
import {bonusReducer} from "./Bonus_reducer";
import {SPB_Reducer} from "./SPB_Reducer";
import { sidebarReducer } from "./side_bar-reducer";
import {users_Reducer} from "./Users_reducer";


let rootReducer = combineReducers({
    messagesPage:SPB_Reducer,
    profilePage:bonusReducer,
    sidebar:sidebarReducer,
    users:users_Reducer
})
// типизация функции
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)
// типизация объекта
export type AppStoreType = typeof store
