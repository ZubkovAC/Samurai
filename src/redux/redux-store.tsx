import {combineReducers, createStore} from "redux";
import {bonusReducer} from "./Bonus_reducer";
import {SPB_Reducer} from "./SPB_Reducer";
import { sidebarReducer } from "./side_bar-reducer";


let reducers = combineReducers({
    messagesPage:SPB_Reducer,
    profilePage:bonusReducer,
    sidebar:sidebarReducer
})

export let store = createStore(reducers)