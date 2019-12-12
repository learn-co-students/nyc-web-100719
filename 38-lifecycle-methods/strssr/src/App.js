import React, {Component} from 'react';
import './App.css';
import CreateStrssForm from './CreateStrssForm'
import FilterContainer from './FilterContainer';
import Queue from './Queue';
import MainContainer from './MainContainer';
import { helperRGBFunc } from './helpers';


class App extends Component {
  
  state = {
    color: helperRGBFunc(), // eventually we will set an interval to change the colors periodically
    nextStrssr: "Please select a strssr",
    searchTerm: ''
  }
    
  handleStrssrSelect = (newStrssr) => {
    this.setState({ nextStrssr: newStrssr })
  }

  updateSearchTerm = (term) => {
    this.setState({ 
      searchTerm: term
    })
  }
  
  render(){
    
    return (
      <div className="App">
        <h1 style={{color: this.state.color, fontWeight: 'bold'}}>
          STRESSpace
        </h1>
        <div className="nav-container">
          <FilterContainer searchTerm={this.state.searchTerm} updateAppSearchTerm={this.updateSearchTerm}/>
          <Queue nextStrssr={this.state.nextStrssr} />
        </div>
        <CreateStrssForm />
        <MainContainer searchTerm={this.state.searchTerm} handleClick={this.handleStrssrSelect} color={this.state.color} />
      </div>
    );
  }
}


export default App 