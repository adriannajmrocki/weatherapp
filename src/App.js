import React, { Fragment, useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';

import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    axios.get(`${process.env.REACT_APP_CURRENT_URL}q=${ inputValue }&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <Fragment>
      <SearchBar value={ inputValue } changeValue={ handleChange } submit={ handleSubmit } />
    </Fragment>
  );
}

export default App;
