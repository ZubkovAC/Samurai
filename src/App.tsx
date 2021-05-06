import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {initialazedSuccessApp} from "./redux/App-reducer/app_reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/preloader";
import {Route,Switch, RouteComponentProps, withRouter, Redirect} from 'react-router-dom'
import {NavBar} from "./components/HavBar/NavBar";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {SuspenseComponent} from "./utils/Lazy-Suspense/Lazy-Suspense";

const Login = React.lazy(() => import('./Login/Login'));
const BonusContainer = React.lazy(() => import('./components/Bonus/BonusContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Kazan = React.lazy(() => import("./components/Kazan/Kazan"));
const Moscow = React.lazy(() => import("./components/Moscow/Moscow"));
const NizhnyNovgorod = React.lazy(() => import("./components/NizhnyNovgorod/NizhnyNovgorod"));
const Yakaterinburg = React.lazy(() => import("./components/Yakaterinburg/Yakaterinburg"));
const SaintPetersburg = React.lazy(() => import('./components/SaintPetersburg/SaintPetersburg'));

const SaintPetersburgSuspense = SuspenseComponent(SaintPetersburg)
const KazanSuspense = SuspenseComponent(Kazan)
const NizhnyNovgorodSuspense = SuspenseComponent(NizhnyNovgorod)
const YakaterinburgSuspense = SuspenseComponent(Yakaterinburg)
const MoscowSuspense = SuspenseComponent(Moscow)
const LoginSuspense = SuspenseComponent(Login)
const BonusContainerSuspense = SuspenseComponent(BonusContainer)
const ProfileContainerSuspense = SuspenseComponent(ProfileContainer)
const UsersContainerSuspense = SuspenseComponent(UsersContainer)


export type InitialazedPropsType = {
    Initialazed: boolean
}
export type InitialazedType = InitialazedPropsType & {
    initialazedSuccessApp: () => void
}


class App extends React.Component<InitialazedType & RouteComponentProps> {
    componentDidMount() {
        this.props.initialazedSuccessApp()
    }

    render() {
        if (!this.props.Initialazed) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Switch>

                        <Route path='/Moscow' render={() => <MoscowSuspense/>}/>
                        <Route path='/SaintPetersburg' render={() => <SaintPetersburgSuspense/>}/>
                        <Route path='/Kazan' render={() => <KazanSuspense/>}/>
                        <Route path='/NizhnyNovgorod' render={() => <NizhnyNovgorodSuspense/>}/>
                        <Route path='/Yakaterinburg' render={() => <YakaterinburgSuspense/>}/>
                        <Route path='/Users' render={() => <UsersContainerSuspense/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainerSuspense/>}/>
                        <Route path='/Bonus' render={() => <BonusContainerSuspense/>}/>
                        <Route path='/Login' render={() => <LoginSuspense/>}/>
                        <Redirect from="/" to="/profile" />


                    </Switch>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): InitialazedPropsType => ({
    Initialazed: state.app.initialazed
})

export default withRouter(connect(mapStateToProps, {initialazedSuccessApp})(App))


