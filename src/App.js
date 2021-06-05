import './App.scss';
import './nullstyle.scss';
import { BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import FooterContainer from './Components/Footer/Footer.jsx';
import News from './Components/News/News.jsx';
import Music from './Components/Music/Music.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Settings from './Components/Settings/Settings';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
// import UsersContainer from './Components/Users/UsersContainer';
// import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import React from 'react';
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux';
import Preloader from './Components/common/PreLoader/Preloader';
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));

class App extends React.Component {
  componentWillMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className='app-wrapper'>
            <HeaderContainer />
            <NavBar />
            <React.Suspense fallback={<Preloader />} >
              <div className='app-wrapper-content'>
                <Switch>
                  <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                  <Route path='/dialogs' render={() => <DialogsContainer />} />
                  <Route path='/users' render={() => <UsersContainer />} />
                  <Route path='/news' render={() => <News />} />
                  <Route path='/music' render={() => <Music />} />
                  <Route path='/settings' render={() => <Settings />} />
                  <Route path='/login' render={() => < Login />} />
                  <Route exact path='/' render={() => < ProfileContainer />} />
                  <Route path='*' render={() => < NotFoundPage />} />
                </Switch>
              </div>
            </React.Suspense>
            <FooterContainer />
          </div>
        </div>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);
