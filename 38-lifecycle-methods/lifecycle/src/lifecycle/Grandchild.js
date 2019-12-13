import React from 'react'

class Grandchild extends React.Component {
  constructor(props){
    super()
    // console.log('CONSTRUCTING', props.name)
  }


  componentDidMount(){
    // console.log('DID MOUNT', this.props.name)
    // do my fetch and setState 
  }

  render(){
    // console.log('RENDERING', this.props.name)
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild