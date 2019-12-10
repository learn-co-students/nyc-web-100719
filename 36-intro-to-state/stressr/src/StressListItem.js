import React from 'react';


class StressListItem extends React.Component {

    render(){
        const {id, name, level, image, duration, color, handleClick} = this.props; // DESTRUCTURING IS LYFE
        return (
            <div className="stresscard" id={id} style={{backgroundColor: color}} onClick={(e) => handleClick(name)}>
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