import React, {Component} from 'react';
import '../App.css';
import CreateStrssForm from '../Components/CreateStrssForm'
import FilterContainer from './FilterContainer';
import Queue from '../Components/Queue';
import MainContainer from './MainContainer';
import { helperRGBFunc } from '../helpers';


class App extends Component {

  // WE DONT NEED IT. because... es6 and our shorter state syntax and arrow functions 
  // constructor(){
  //   super()
  //   this.state = {}

  // this.handleStrssrSelect = this.handleStrssrSelect.bind(this)
  // }
  
  state = {
    color: helperRGBFunc(), // eventually we will set an interval to change the colors periodically
    nextStrssr: "Please select a strssr",
    searchTerm: '',
    number: 0
  }
    
  handleStrssrSelect = (newStrssr) => {
    this.setState({ nextStrssr: newStrssr })
  }

  updateSearchTerm = (term) => {
    this.setState({ 
      searchTerm: term
    })
  }

  addOne = (typeOfShot) => {
    // this.setState({number: this.state.number + 1})  ==> setState is async and both will eval to {number: 1} at first run 
    // this.setState({number: this.state.number + 1})
    this.setState((prevState) => {
      console.log('first', prevState.number);
      return {number: prevState.number + 1}
    }) 
    this.setState((prevState) => {
      console.log('second', prevState.number);
      return {number: prevState.number + 1}
    })
    this.setState((prevState) => {
      console.log('third', prevState.number);
      return {number: prevState.number + 1}
    })
  }

  setStateCallbackExample = () => {
    // console.log('before', this.state.user)
    this.setState({user: {'name': 'caryn', 'sign': 'gemini'}}, () => {
      // mocking the loggin in process 
      // redirect once successfully logged in to some other page using... REACT ROUTTTEEER
      console.log('im done now!', this.state.user)
    })
  }


  
  render(){
    let {number, color} = this.state
    // console.log('RENDERING',this.state.number)
    return (
      <div className="App">
        <h1 style={{color: this.state.color, fontWeight: 'bold'}}>
          STRESSpace
          <button onClick={this.setStateCallbackExample}>Add 1</button>
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