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
    portfolio: [],
    filter: ''
  }

  componentDidMount(){
    fetch(stocksURI)
      .then(res => res.json())
      .then(stocks => {
        // this.renderStocks(stocks) ===> SUPER TEMPORARY
        this.setState({ stocks: stocks })
      })
  }

  addStock = (portfolio) => {
    this.setState({ portfolio: [...this.state.portfolio, portfolio ]})
    // vs... this.state.portfolio.push(portfolio ) ==> NO GO CAUSE IT MUTATES
  }

  changeFilter = (value) => {
    console.log(value)
    this.setState({ filter: value })
  }

  render() {
    // let displayedStocks = this.state.stocks.filter(stock => stock.type.includes( this.state.filter))

    return (
      <div>
        <SearchBar changeFilter={this.changeFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock={this.addStock} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
