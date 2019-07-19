import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import './App.css';

class App extends React.Component {
  state = {
    
  }

  componentDidMount() {
    axios.get(`https://mympy-dreamers.herokuapp.com`);
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;