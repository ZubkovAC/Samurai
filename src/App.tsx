import React from 'react';
import './App.css';
import {NavBar} from "./components/HavBar/NavBar";
import {Moscow} from "./components/Moscow/Moscow";
import {Kazan} from "./components/Kazan/Kazan";
import {NizhnyNovgorod} from "./components/NizhnyNovgorod/NizhnyNovgorod";
import {Yakaterinburg} from "./components/Yakaterinburg/Yakaterinburg";
import {Route} from 'react-router-dom'
import BonusContainer from "./components/Bonus/BonusContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import UsersContainer from './components/Users/UsersContainer';
import { SaintPetersburg } from './components/SaintPetersburg/SaintPetersburg';



const App = () => {


    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Moscow' render={() => <Moscow/>}/>
                    <Route path='/SaintPetersburg' render={() => <SaintPetersburg />}/>
                    <Route path='/Kazan' render={() => <Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={() => <Yakaterinburg/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/Bonus' render={() => <BonusContainer/>}/>
                    <Route path='/Login' render={() => <Login/>}/>

                </div>
            </div>
    );
}

export default App;

