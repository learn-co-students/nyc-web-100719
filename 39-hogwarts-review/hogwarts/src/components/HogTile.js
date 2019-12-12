import React, { Component } from 'react';
import HogDetail from './HogDetail';


// Images solution
// 1. move into public
// 2. 

// INSIDE OF SRC VERSION 
// const pathHelper = (name) => {
//     return `../../hog-imgs/${name.split(' ').join('_').toLowerCase()}.jpg`
// }

// INSIDE OF PUBLIC VERSION 

// const HogTile = (props) => { return (<div> THIS IS A FUNCTIONAL COMPONENT </div>)}

class HogTile extends Component {
    state = {
        clicked: false
    }

    pathHelper = (name) => {
        return `/hog-imgs/${name.split(' ').join('_').toLowerCase()}.jpg`
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    renderDetails = () => {
        return (
            this.state.clicked ? <HogDetail handleDirty={this.props.handleDirty} {...this.props}/> : ''
        )
    } // TODO diff in efficiency btwn '' and null?

    render(){
        let imgReq = this.pathHelper(this.props.name)
        return (
            <div className="pigTile" onClick={this.handleClick}>
                <div className="ui eight wide column">
                    <img src={imgReq} />
                    <div>{this.props.name}</div>
                    {this.renderDetails()}
                </div>

            </div>
        )
    }
}

export default HogTile;