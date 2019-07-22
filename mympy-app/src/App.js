import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import DreamMarket from './components/DreamMarket';

import './App.scss';

class App extends React.Component {
  state = {
    data: ""
  }

  componentDidMount() {
    axios.get(`https://mympy-dreamers-staging.herokuapp.com`)
      .then(res => {
        console.log(res.data);
        this.setState({ 
          data: res.data
        });
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>{this.state.data.Title}</h1>
          <Route path="" component={DreamMarket} />
        </div>
      </Router>
    );
  }
}

export default App;