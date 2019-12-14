import React from 'react'

const Stock = (props) => (
  <div onClick={() => props.addStock ? props.addStock(props.id): props.removeStock(props.id)}> 

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{props.ticker}: {props.price}</p>
      </div>
    </div>


  </div>
)

/**
 * regarding the onClick... when stock is rendered as a child of StockContainer it is passed a addStock callback prop
 * when is it rendered as a child of Portfolio container, it is passed a removeStock callback prop
 * 
 * 
 * Therefore, we check if there is an addStock callback. If there is, call it. Otherwise, call removeStock
 */

export default Stock
