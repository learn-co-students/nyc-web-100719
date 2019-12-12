import React, { Component } from 'react';

class HogDetail extends Component {
    render(){
        const { isDirty, weight, specialty, greased, name } = this.props
        // console.log(this.props)
        return(
            <div className="pig-details">
                <div>Weight: {weight}</div>
                <div>Specialty: {specialty}</div>
                {greased && <div>Greased</div>}
                <div>Highest Medal Achieved: {this.props['highest medal achieved']}</div>
                <button onClick={() => this.props.handleDirty(name)}>{isDirty ? 'Shower Dat Hog' : 'Roll Around in Da Mudd'}</button>
            </div>
        )
    }
}

export default HogDetail;