import React, { Fragment } from 'react'

const Sushi = (props) => {
  let {name, id, price, img_url} = props.sushi
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.hasBeenEaten ? null:  props.eatSushi(id,price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.hasBeenEaten ?
            null
          :
            <img src={img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi