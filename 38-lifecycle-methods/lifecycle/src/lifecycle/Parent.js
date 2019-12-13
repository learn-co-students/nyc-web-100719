import React from 'react'
import Child from './Child'

class Parent extends React.Component {

    state = {
        clicked: false,
        color: 'red'
    }

    componentDidMount(){
        // console.log('DID MOUNT', this.props.name)
    }

    componentDidUpdate(prevProps, prevState){
        //  console.log('DID UPDATE', this.state, 'PREV', prevState)
         if( this.state.clicked && !prevState.clicked ){  // logical operators 
             this.setState({ color: 'blue '})
         }
        // this.state and this.props ===> current values
        // conditional checking to see if prevProps.channelId === this.props.channelId
        // BEWARE SETTING STATE IN HERE ==> only using conditionals 
    }

    toggleClicked = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){ // LOGICAL AND 
        // console.log('RENDERING', this.props.name)
        return (
            <div className="box">
            <button onClick={this.toggleClicked}>Click</button>
            <p>Parent</p>
            {this.state.clicked && <Child name="child"/> }
            {/* EQUIVALENT TO THE ABOVE {this.state.clicked ? <Child name="child"/> : ''} */}
            </div>
        );
        
    }
}

export default Parent



// CONSTRUCTING parent
// RENDERING parent
// DID MOUNT parent 
// CONSTRUCTING child
// RENDERING child
// DID MOUNT child 
// CONSTRUCTING grandchild
// RENDERING grandchild
// DID MOUNT grandchild 

// CONSTRUCTING parent
// RENDERING parent
// CONSTRUCTING child
// RENDERING child
// CONSTRUCTING grandchild
// RENDERING grandchild
// DID MOUNT parent 
// DID MOUNT child 
// DID MOUNT grandchild 

// CONSTRUCTING parent
// RENDERING parent
// CONSTRUCTING child
// RENDERING child
// CONSTRUCTING grandchild
// RENDERING grandchild
// DID MOUNT grandchild 
// DID MOUNT child 
// DID MOUNT parent 
