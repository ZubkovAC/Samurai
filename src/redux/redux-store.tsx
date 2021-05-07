import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// @ts-ignore
export let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))

export type AppStoreType = typeof store
