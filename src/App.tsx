import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/HavBar/NavBar";
import {SaintPetersburg} from "./components/SaintPetersburg/SaintPetersburg";
import {Moscow} from "./components/Moscow/Moscow";
import {Kazan} from "./components/Kazan/Kazan";
import {NizhnyNovgorod} from "./components/NizhnyNovgorod/NizhnyNovgorod";
import {Yakaterinburg} from "./components/Yakaterinburg/Yakaterinburg";
import {Route} from 'react-router-dom'
import {BonusContainer} from "./components/Bonus/BonusContainer";
import {AppStateType} from "./redux/redux-store";

type PropsType ={
    state: AppStateType
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
                                   state={props.state}
                                   dispatch={props.dispatch}
                               />}/>
                    <Route path='/Kazan' render={() => <Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={() => <Yakaterinburg/>}/>
                    <Route path='/Bonus' render={() => <BonusContainer
                                dispatch={props.dispatch}
                                state={props.state}

                    />}
                    />
                </div>
            </div>
    );
}

export default App;

