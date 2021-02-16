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
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Moscow' render={() => <Moscow/>}/>
                    <Route path='/SaintPetersburg'
                           render={() => <SaintPetersburg />}/>
                    <Route path='/Kazan' render={() => <Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={() => <Yakaterinburg/>}/>
                    <Route path='/Users' render={() => <UsersContainer/>}/>
                    <Route path='/Profile' render={() => <ProfileContainer/>}/>
                    <Route path='/Bonus' render={() => <BonusContainer/>}/>


                </div>
            </div>
    );
}

export default App;

