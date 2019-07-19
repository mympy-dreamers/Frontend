import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import NavBar from './view/navbar/NavBar';
import './App.css';

class App extends React.Component {
  state = {
    data: ""
  }

  componentDidMount() {
    axios.get(`https://mympy-dreamers.herokuapp.com`)
      .then(res => {
        console.log(res.data);
        this.setState({ 
          data: res.data
        });
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>{this.state.data.Title}</h1>
        {/* not sure what actual paths will be, change once available */}
      </div>
    );
  }
}

export default App;