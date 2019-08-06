import React from 'react';
import { Route } from "react-router-dom";

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/dreamMarket/DreamMarket';
import DreamPage from './components/dreamPage/DreamPage.js';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/login/PrivateRoute';
import { useAuth0 } from "./react-auth0-wrapper";

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    // const { loading, user } = useAuth0();
    // if (localStorage.getItem('user') !== user.name) {
    //   this.history.push('/dashboard')
    // }
  }

  render() {
    // localStorage.setItem('user', useAuth0().user.name)
    return (
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
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

export default App;