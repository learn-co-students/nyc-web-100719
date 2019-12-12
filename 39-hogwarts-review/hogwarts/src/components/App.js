import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          {/* <Filter /> */}
          <HogsList />
      </div>
    )
  }
}

export default App;
