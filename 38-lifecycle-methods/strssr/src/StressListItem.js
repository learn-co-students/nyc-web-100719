import React from 'react';
import { helperRGBFunc } from './helpers';

class StressListItem extends React.Component {
    state = {
        color: helperRGBFunc()
    }

    componentDidMount(){
        setInterval(() => { this.setState({ color: helperRGBFunc() })}, Math.random() * 1000)
    }

    componentWillUnmount() {
        // clear the interval here 
    }
    
    // NEXT STEPS / DO BETTER

    render(){
        const {id, name, level, image, duration, handleClick} = this.props; 
        return (
            <div className="stresscard" id={id} style={{backgroundColor: this.state.color}} onClick={(e) => handleClick(name)}>
                <img className="strssr-img" alt={name} src={image}/>
                <div className="strssr-info">
                    <h4 className="strssr-name">{name}</h4>
                    <p className="strssr-level">{level}: <span className="strssr-duration">{duration} min</span></p>
                    
                </div>
            </div>
        )
    }
}

export default StressListItem;


/**  AN ASIDE ON ARROW FUNCTIONS
 * if you have 0 args or more than 1 arg in an arrow func you need parens
 *  () => {}
 * myarg => {}
 * (arg1, arg2, arg3) => {}
 * 
 * 
 * 
 */