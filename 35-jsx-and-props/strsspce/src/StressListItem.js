import React from 'react';


class StressListItem extends React.Component {
    render(){
        const {id, name, level, image} = this.props;
        return (
            <div className="stresscard" id={id}>
                <h1>{name}</h1>
                <p>{level}</p>
                <img src={image}/>
            </div>
        )
    }
}

// functional version
// function StressListItem(props) {
//     return (
//         <div className="stresscard" id={props.id}>
//             <h1 >{props.name}</h1>
//             <p>{props.level}</p>
//             <img src={props.image}/>
//         </div>
//     )
// }

export default StressListItem;