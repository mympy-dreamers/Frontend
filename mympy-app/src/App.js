import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import Login from './components/login/Login';

class App extends React.Component {
  state = {
    
  }

  render() {
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
      </div>
    );
  }
}

export default App;