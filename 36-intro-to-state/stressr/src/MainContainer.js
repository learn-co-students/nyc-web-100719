import React from 'react';
import data from './data.js';
import StressListItem from './StressListItem'

class MainContainer extends React.Component{

    state = {
      strssrs: [],
      allStrssrView: true
    }

    renderStrssrs = () => {
      // binding causes 'this' to always be the context in which it was defined. In this case, MainContainer

        return this.state.strssrs.map((stress, ind) => {
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
          console.log(data)
          this.setState({ strssrs: data }) // this only updates the keys you specify
          // creating elements and DOM manipulation here in vanilla JS 
        })
    }

    render(){ // eventually some conditional logic for if i'm looking at ALL strssrs or JUST ONE
      console.log(this.state) // this.props.handleClick
        return (
            <div className="stress-holder">
              <button onClick={this.fetchStrssrs}>Get Strssrs</button>
                {this.renderStrssrs()}
            </div>
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