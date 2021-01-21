import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StatePropsType, updateNewPostText} from "./State";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            < App
                state={state}
                addPost={addPost}
                updateNewPostText = {updateNewPostText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}
