import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
  constructor(props){
    super()

    // console.log('CONSTRUCTING', props.name)
  }

  componentDidMount(){
    // console.log('DID MOUNT', this.props.name)
    this.interval = setInterval(() => console.log('intervalling'), 1000)
  }

  componentWillUnmount(){
    console.log('UNMOUNTING CHILD')
    // debugger;
    clearInterval(this.interval)
  }

  render(){
    // console.log('RENDERING', this.props.name)
    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child