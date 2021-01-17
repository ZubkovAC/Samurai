import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id:1 , name:'Dimych'},
    {id:2 , name:'Andrey'},
    {id:3 , name:'Sveta'},
    {id:4 , name:'Valera'},
    {id:5 , name:'Sasha'},
    {id:6 , name:'Viktor'},
    {id:7 , name:'Ac'},
]

let messagesData = [
    {id:1, message:'Good morning'},
    {id:2, message:'Good after'},
    {id:3, message:'Good nigth'},
    {id:4, message: "The future is created in your Head"},
    {id:5, message: "You can't easily pull a fish out of a pond"},
    {id:6, message: "Patience and hard work will wear everything out"},
    {id:7, message: "morning in the evening is more complicated"},
]

let postsData = [
    {id:1, message:'Hello men!', likecount:11},
    {id:2, message:"It's time?", likecount:5},
    {id:3, message:'Go to learn!', likecount:12},
    {id:4, message: "It is better to sail on a bad plan than on the will of fate", likecount:4},
    {id:5, message: "Sharpen the saw before working", likecount:7},
    {id:6, message: "Make your life a dream", likecount:4},
    {id:7, message: "It's easier to sit on the couch and complain about life than to move", likecount:1},
]




ReactDOM.render(
        < App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
