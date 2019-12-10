import React, {Component} from 'react';
import './App.css';
import CreateStrssForm from './CreateStrssForm'
import FilterContainer from './FilterContainer';
import Queue from './Queue';
import MainContainer from './MainContainer';

// `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`


// vanilla js event handling
// create a button
// query for that button
// add an eventlistener
// write the callback 

// forms and prevent default 
// adding event listener to everryryyy of soemthing was awful (but then event deleation)
// making it dynamic (also event delegation)

let helperRGBFunc = () => {
  return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}

class App extends Component {

    state = {
      color: helperRGBFunc(),
      nextStrssr: "Please select a strssr"
    }

  // constructor(props){     are there other built in react methods to call in constructor? 
  //   super(props)

  //   this.state = {
  //     color: `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`,
  //     showUser: props.isLoggedIn
  //   }
  // }



  handleClick = () => {
    // WRONG this.state.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    this.setState({ color: helperRGBFunc() })


    // setState can either take an object or a callback function
    // this.setState(someObj)
    // this.setState( (prevState) => { return someObj     } )
  }


  // PASS A REFERENCE, NOT AN INVOCATION, TO THE EVENTATTRIBUTE 
  // onClick={(e) => this.handleClick(e)}
  // onClick={this.handleClick}
  // onClick={this.handleClick()} DOES NOT WORK

  handleStrssrSelect = (newStrssr) => {
    this.setState({ nextStrssr: newStrssr })
  }

  render(){

    return (
      <div className="App">
        <h1 style={{color: this.state.color, fontWeight: 'bold'}}>
          STRESSpace
          <button onClick={this.handleClick}>CLICK ME!!</button>
        </h1>
        <div className="nav-container">
          <FilterContainer />
          <Queue nextStrssr={this.state.nextStrssr} />
        </div>
        <CreateStrssForm />
        <MainContainer handleClick={this.handleStrssrSelect} color={this.state.color} />
      </div>
    );
  }
}


export default App  // default export 
