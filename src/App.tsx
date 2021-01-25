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
import {StatePropsType, StoreType} from "./State";

type PropsType ={
    state:StatePropsType
    dispatch:(action:any)=>void
}

const App:React.FC<PropsType> = (props) => {

    //const state= props.store.getState()

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

                                   dispatch={props.dispatch}

                               />}/>
                    <Route path='/Kazan' render={() => <Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={() => <Yakaterinburg/>}/>
                    <Route path='/Bonus' render={() => <Bonus messagesData={props.state.profilePage.messagesData}
                                                              dialogsData={props.state.profilePage.dialogsData}
                                                              newPostText={props.state.profilePage.newPostText}

                                                             dispatch={props.dispatch}

                    />}
                    />
                </div>
            </div>
    );
}

export default App;

