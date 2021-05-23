import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import FooterContainer from './Components/Footer/Footer.jsx';
import News from './Components/News/News.jsx';
import Music from './Components/Music/Music.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import SettingsContainer from './Components/Settings/SettingsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import React from 'react';
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux';
import Preloader from './Components/common/PreLoader/Preloader';


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
            <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <SettingsContainer />} />
              <Route path='/login' render={() => < Login />} />
            </div>
            <FooterContainer />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App);