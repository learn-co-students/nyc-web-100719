import React from 'react';


class FilterContainer extends React.Component{

  handleChange = (e) => {
    let newInput = e.target.value; 
    this.props.updateAppSearchTerm(newInput)
  }

  // to prove a point
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.updateAppSearchTerm(this.state.searchTerm)
  //   this.setState({ searchTerm: '' })
  // }

    render(){
        return ( // note to self update clear btn styling 
            <div className="filter-options">
              <span>Filters</span>
              <form onSubmit={this.handleSubmit}>
                <label className="filter-label">
                  <input
                    type="text"
                    placeholder="search strssrs"
                    value={this.props.searchTerm}
                    onChange={this.handleChange}/>
                </label>
              </form>
              <button onClick={() => this.props.updateAppSearchTerm('')}>Clear</button> 
              {/* <label className="filter-label"> Duration: 
                <select defaultValue="all">
                  <option value="10">6 - 10 min</option>
                  <option value="5">0 - 5 min</option>
                  <option value="all">All</option>
                  <option value="11">11+ min</option>
                </select> 
              </label>
              <label className="filter-label"> Level: 
                <select defaultValue="all">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="all">All</option>
                  <option value="visceral">Visceral</option>
                  <option value="advanced-darkness">Advanced Darkness</option>
                  <option value="overlord">Overlord</option>
                </select> 
              </label> */}
          </div>
        )
    }
}

export default FilterContainer;