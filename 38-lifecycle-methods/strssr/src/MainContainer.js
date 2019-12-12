import React from 'react';
import StressListItem from './StressListItem'

class MainContainer extends React.Component{

    state = {
      strssrs: [],
    }

    renderStrssrs = () => {
        let filteredStrssrs = this.state.strssrs
          .filter(stress => stress.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())) // []

        return filteredStrssrs.map((stress, ind) => {
           return <StressListItem 
            key={ind}
            id={stress.id}
            name={stress.name} 
            level={stress.level} 
            image={stress.image}
            duration={stress.duration}
            color={this.props.color}
            handleClick={this.props.handleClick}
          />
          }
        )
      }

    fetchStrssrs = () => {
      fetch('http://localhost:3001/strssrs')
        .then(res => res.json())
        .then(data => {
          this.setState({ strssrs: data })
        })
    }

    render(){ // eventually some conditional logic for if i'm looking at ALL strssrs or JUST ONE
        return (
          <>
            <button id="load" onClick={this.fetchStrssrs}>Get Strssrs</button>
            <div className="stress-holder">
                {this.renderStrssrs()}
            </div>
          </>
        )
    }
}

export default MainContainer;




/****
 * 
 * 
 * [1,2,3].map(num => return num*2 ) ====> [2,4,6]
 * 
 * 
 * tracker = 0 
 * [1,2,3].forEach(num => tracker + num )
 * 
 * 
 * 
 */