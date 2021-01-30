import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {StatePropsType} from "./redux/store"
import {StoreContext} from "./StoreContext";

const _callSubscriber = (state:StatePropsType) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            < App />
            </StoreContext.Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
_callSubscriber(store.getState())
store.subscribe( () => {
    let state = store.getState()
    _callSubscriber(state)
})





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
