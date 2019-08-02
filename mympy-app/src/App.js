import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/dreamMarket/DreamMarket';
import DreamPage from './components/dreamPage/DreamPage.js';
import DreamCard from './components/dreamForms/dreamCard';
import DreamerProfile from './components/dreamForms/dreamerProfile';
import Dreamer from './components/dreamForms/dreamers';
import PostDreamer from './components/dreamForms/dreamers'

class App extends React.Component {
  state = {
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/dreamer" component={DreamCard}/>
          <Route exact path="/dreamerProfile" component={DreamerProfile}/>
          <Route exact path="/profileDreamer" component={Dreamer}/>
          <Route exact path="/profilePage" component={PostDreamer}/>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={(props) => (
            <Login
            {...props}
            type="login"
            />
          )} />
          <Route path="/register" render={(props) => (
            <Login
            {...props}
            type="register"
            />
          )} />
          <Route exact path="/market" component={DreamMarket} />
          <Route path="/market/:id" component={DreamPage} />
        </div>
      </Router>
    );
  }
}

export default App;