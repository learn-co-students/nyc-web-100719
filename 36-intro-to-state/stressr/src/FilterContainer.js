import React from 'react';

class FilterContainer extends React.Component{

    render(){
        return (
            <div className="filter-options">
              Filters
              <form>
                <label className="filter-label">
                  <input type="text" placeholder="search strssrs" />
                </label>
              </form>
              <label className="filter-label"> Duration: 
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
              </label>
          </div>
        )
    }
}

export default FilterContainer;