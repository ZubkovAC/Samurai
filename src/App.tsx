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


const App = (props:any) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/Moscow' render={()=><Moscow/>}/>
                    <Route path='/SaintPetersburg' render={()=><SaintPetersburg postsData={props.postsData}/>}/>
                    <Route path='/Kazan' render={()=><Kazan/>}/>
                    <Route path='/NizhnyNovgorod' render={()=><NizhnyNovgorod/>}/>
                    <Route path='/Yakaterinburg' render={()=><Yakaterinburg/>}/>
                    <Route path='/Bonus' render={()=><Bonus messagesData={props.messagesData} dialogsData={props.dialogsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

