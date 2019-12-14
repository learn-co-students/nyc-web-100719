import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.order === 'abc'} onChange={() => props.changeOrder('abc')}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.order === 'price'} onChange={() => props.changeOrder('price')}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => { props.changeFilter(e.target.value)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
