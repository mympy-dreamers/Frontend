import React from 'react';
import { Route } from "react-router-dom";

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/dreamMarket/DreamMarket';
import DreamPage from './components/dreamPage/DreamPage.js';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/login/PrivateRoute';

class App extends React.Component {
  state = {
    
  }

  render() {
    return (
        <div className="App">
          {  console.log(this.props.location)}
          <NavBar show={this.props.location.pathname.includes('market')}/>
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
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
    );
  }
}

export default App;