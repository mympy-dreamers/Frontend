import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from './components/login/Login';
import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import Card from './components/Card'
import DreamPage from './components/dreamPage/DreamPage.js';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/login/PrivateRoute';

class App extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.users && this.props.users !== prevProps.users) {
      const isUser = this.props.users.reduce((acc, curr) =>
        (curr.auth_id === this.props.authZeroUser.sub) ? true : acc, false)
      this.props.zeroLogin(this.props.authZeroUser, isUser)
    }
  }

  render() {


    return (
      <div className="App">
        <div className="app-wrap">
          <NavBar
            show={this.props.location.pathname.includes('market')}
            onAccountPage={this.props.location.pathname.includes('dashboard')}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
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
          <Route exact path="/market" component={Card} />
          <Route path="/market/:id" component={DreamPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
      </div >
    );
  }
}
const mapStateToProps = ({ users }) => {
  return {
    users: users.users,
    authZeroUser: users.authZeroUser,
  }
}

export default connect(mapStateToProps, {})(App);