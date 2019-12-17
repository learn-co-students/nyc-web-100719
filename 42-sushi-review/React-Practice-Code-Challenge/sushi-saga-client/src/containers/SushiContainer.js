import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         props.sushis.map(sushi => {
          //  console.log('inside sushi map', props.eatenSushi[sushi.id])
           return <Sushi
                      sushi={sushi}
                      eatSushi={props.eatSushi}
                      hasBeenEaten={props.eatenSushi[sushi.id]}/>
         })
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer