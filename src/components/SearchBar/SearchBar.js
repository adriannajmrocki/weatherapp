import React from 'react';

import './SearchBar.css';

const SearchBar = ({ value, changeValue, submit }) => {
  return (  
    <header className="header">
      {/* <div className="container"> */}
        <form className="search-form" onSubmit={ submit }>
          <label className="search-label">
            <input type="text" placeholder="Wpisz miasto" value={ value } onChange={ changeValue } />
            <button className="search-btn"><i className="fas fa-search fa-2x"></i></button>
          </label>
        </form>
      {/* </div> */}
    </header>
  );
}
 
export default SearchBar;