import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/dreamMarket/DreamMarket';
import DreamPage from './components/dreamPage/DreamPage.js';

class App extends React.Component {
  state = {
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
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