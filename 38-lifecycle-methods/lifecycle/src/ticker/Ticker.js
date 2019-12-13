import React from 'react'

class Ticker extends React.Component {

  state = {
    value: 0,
    interval: null,
    backgroundColor: 'black'
  }

  componentDidMount(){
    this.updateValue()
  }

  updateValue = () => {
    this.state.interval = setInterval(() => { 
      this.setState({ value: Math.floor(Math.random() * 100)})
    },1000)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.value > this.state.value){
      this.setState({ backgroundColor: 'red'})
    } else if (prevState.value < this.state.value){
      this.setState({ backgroundColor: 'green'})
    }
  }


  render(){
    return (
      <div className="box">
        <div>
          <h1 style={{ backgroundColor: this.state.backgroundColor, color: 'white' }}>{this.state.value}</h1>
        </div>
      </div>
    );
  }
}

export default Ticker