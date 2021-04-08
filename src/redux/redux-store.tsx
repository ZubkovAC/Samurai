import {applyMiddleware, combineReducers, createStore} from "redux";
import {bonusReducer} from "./Bonus-reducer/Bonus_reducer";
import { sidebarReducer } from "./Side_bar-reducer/side_bar-reducer";
import {users_Reducer} from "./Users-reducer/Users_reducer";
import {profile_Reducer} from "./Profile-reducer/Profile_Reducer";
import {SPB_Reducer} from "./SPB-reducer/SPB_Reducer";
import {auth_Reducer} from "./Auth-reducer/auth_reducer";
import  thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {AppReducer} from "./App-reducer/app_reducer";

let rootReducer = combineReducers({
    messagesSpbPage:SPB_Reducer,
    bonusPage:bonusReducer,
    sidebar:sidebarReducer,
    users:users_Reducer,
    profile:profile_Reducer,
    auth_user:auth_Reducer,
    form:formReducer,
    app:AppReducer
})
// типизация функции Reducer
export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
// типизация объекта store
export type AppStoreType = typeof store
