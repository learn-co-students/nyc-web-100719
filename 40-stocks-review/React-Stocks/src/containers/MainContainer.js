import React, { Component, version } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const stocksURI = 'http://localhost:3000/stocks'

/**
 * gotta move state around?
 * look where it currently lives and identify all methods that setState
 * move state and those methods to new home
 * pass props down to the component that used to have state 
 */

class MainContainer extends Component {

  state = {
    stocks: [],
    filter: '',
    order: null
  }

  componentDidMount(){
    fetch(stocksURI)
      .then(res => res.json())
      .then(stocks => {
        // this.renderStocks(stocks) ===> SUPER TEMPORARY
        this.setState({ stocks: stocks })
      })
  }

  addStock = (id) => {
    let targetStockInd = this.state.stocks.findIndex(stock => stock.id === id)
    let newStocks = [...this.state.stocks] // create a copy 
    newStocks[targetStockInd] = {...newStocks[targetStockInd], inPortfolio: true}

    this.setState({ stocks: newStocks })
  }

  removeStock = (id) => {
    let targetStockInd = this.state.stocks.findIndex(stock => stock.id === id)
    let newStocks = [...this.state.stocks] // create a copy 
    newStocks[targetStockInd] = {...newStocks[targetStockInd], inPortfolio: false}

    this.setState({ stocks: newStocks })
  }

  changeFilter = (value) => {
    this.setState({ filter: value })
  }

  changeOrder = (value) => {
    this.setState({ order: value })
  }

  render() {
    let portfolioStocks = this.state.stocks.filter(stock => stock.inPortfolio) // same as stock.inPortfolio === true

    let displayedStocks = this.state.stocks.filter(stock => stock.type.includes( this.state.filter ))
    if (this.state.order === 'abc'){
      displayedStocks = displayedStocks.sort((stock1, stock2) => stock1.name.toLowerCase() < stock2.name.toLowerCase() ? -1 : 1)
    } else if (this.state.order === 'price'){
      displayedStocks = displayedStocks.sort((stock1, stock2) => stock1.price < stock2.price ? -1 : 1)
    }

    return (
      <div>
        <SearchBar
          filter={this.state.filter}
          order={this.state.order}
          changeFilter={this.changeFilter}
          changeOrder={this.changeOrder}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock={this.addStock} stocks={displayedStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} portfolio={portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
