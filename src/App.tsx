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
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Moscow' component={Moscow}/>
                    <Route path='/SaintPetersburg' component={SaintPetersburg}/>
                    <Route path='/Kazan' component={Kazan}/>
                    <Route path='/NizhnyNovgorod' component={NizhnyNovgorod}/>
                    <Route path='/Yakaterinburg' component={Yakaterinburg}/>
                    <Route path='/Bonus' component={Bonus}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

