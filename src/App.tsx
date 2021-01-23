import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/HavBar/NavBar";
import {SaintPetersburg} from "./components/SaintPetersburg/SaintPetersburg";
import {Moscow} from "./components/Moscow/Moscow";
import {Kazan} from "./components/Kazan/Kazan";
import {Bonus} from "./components/Bonus/Bonus";
import {NizhnyNovgorod} from "./components/NizhnyNovgorod/NizhnyNovgorod";
import {Yakaterinburg} from "./components/Yakaterinburg/Yakaterinburg";
import { Route} from 'react-router-dom'



const App = (props: any) => {
    debugger
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/Moscow' render={() => <Moscow/>}/>
                    <Route path='/SaintPetersburg'
                           render={() =>
                               <SaintPetersburg
                                   postsData={props.state.messagesPage.postsData}
                                   newPostText={props.state.profilePage.newPostText}

                                   updateNewPostText={props.updateNewPostText}
                                   addPost={props.addPost}
                               />}/>
                    <Route path='/Kazan' render={() => <Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={() => <Yakaterinburg/>}/>
                    <Route path='/Bonus' render={() => <Bonus messagesData={props.state.profilePage.messagesData}
                                                              dialogsData={props.state.profilePage.dialogsData}
                                                              newPostText={props.state.profilePage.newPostText}

                                                              addPostChat={props.addPostChat}
                                                              updateNewPostText={props.updateNewPostText}

                    />}
                    />
                </div>
            </div>
    );
}

export default App;

