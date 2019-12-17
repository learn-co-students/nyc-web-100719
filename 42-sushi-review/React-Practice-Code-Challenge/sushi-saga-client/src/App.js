import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    currIndex: 0,
    eatenSushi: {},
    green: 100
  }

  componentDidMount(){
    fetch(API)
    .then((resp)=>{
      return resp.json()
    }).then((data)=>{
      this.setState({sushis: data})
    })
  }

  displaySushi=()=>{
    return this.state.sushis.slice(this.state.currIndex, this.state.currIndex+4)
  }

  moreSushi= () => {
    this.setState({currIndex: this.state.currIndex + 4})
  }

  eatSushi = (id,price) => {
    if (this.state.green >= price){
      let newGreen = this.state.green - parseInt(price)
      this.setState({eatenSushi: {...this.state.eatenSushi, [id]: true }, green: newGreen})
    }
    else { alert('you done goofed up!')}
    // nice thing is then i can do... this.state.eatenSushi[id] and this is constant lookup time 
  }

  render() {

    // Object.keys(this.state.eatenSushi) ==> an array of all keys
    // Object.values(this.state.eatenSushi) ==> an array of all values

    let eatenSushiIds = Object.keys(this.state.eatenSushi);

    console.log('RENDERING APP ',eatenSushiIds)
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displaySushi()}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushiArr={eatenSushiIds} green={this.state.green}/>
      </div>
    );
  }
}

export default App;


/**
 * 
 * eaten tracking
 * v1: pass down eatenSushis to Sushi component and check for the individual sushi id in that array
 * v2: if sushi is clicked add a key to the object in the app array and check for props.eaten
 * v3: eatenSushi on state is an object instead of an array
 * v4: putting state on the sushi component 
 */

 /**
  * 
  * 
  * BONUS: Wallet to add money
  * 1. we gotta add a controlled form 
  * 2. add method in App to update App state green (increaseing by some #)
  * 3. connect the method to the form (onSubmit) ie pass it down as props
  * 
  *  BONUS: Full Rotation 
  * 1. add some conditional logic to moreSushi method in app
  * 2. if this.state.currIndex > this.state.sushi.length -4 (???) then... 
  * 3. set this.state.currIndex back to zero 
  * 
  */