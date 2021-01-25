import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StatePropsType, store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";



const _callSubscriber = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            < App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}


store.subcribe(_callSubscriber)

_callSubscriber(store.getState())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
