import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import NavBar from './view/navbar/NavBar';
import Home from './view/home/Home';
import DreamMarket from './components/DreamMarket';
{/* import Login from './components/login/Login'; */}

class App extends React.Component {
  state = {
    
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
          <NavBar />
          <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={Login} /> */}
          <Route path="" component={DreamMarket} />
        </div>
      </Router>
    );
  }
}

export default App;