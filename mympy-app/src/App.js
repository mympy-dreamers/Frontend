import React from 'react';
import axios from 'axios';
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
        <h1>{this.state.data.Title}</h1>
      </div>
    );
  }
}

export default App;