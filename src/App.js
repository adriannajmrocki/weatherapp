import React, { Fragment, useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';

import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    city: '',
    country: '',
    icon: undefined,
    temp: null,
    minTemp: null,
    maxTemp: null,
    feelsLike: null,
    clouds: null,
    wind: null,
    pressure: null,
    humidity: null,
  });
  const [shouldDisplayWeather, setShouldDisplayWeather] = useState(false);

  const handleChange = e => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    axios.get(`${process.env.REACT_APP_CURRENT_URL}q=${ inputValue }&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        setCurrentWeather({
          city: res.data.name,
          country: res.data.sys.country,
          icon: res.data.weather[0].main,
          temp: Math.round(res.data.main.temp - 274.15),
          minTemp: Math.round(res.data.main.temp_min - 274.15),
          maxTemp: Math.round(res.data.main.temp_max - 274.15),
          feelsLike: Math.round(res.data.main.feels_like - 274.15),
          clouds: res.data.clouds.all,
          wind: res.data.wind.speed,
          pressure: res.data.main.pressure,
          humidity: res.data.main.humidity
        });
        setShouldDisplayWeather(true);
      }
    })
    .catch(err => console.log(err))

    setInputValue('');
  }

  return (
    <Fragment>
      <SearchBar value={ inputValue } changeValue={ handleChange } submit={ handleSubmit } />
      <CurrentWeather currentWeather={ currentWeather } display={ shouldDisplayWeather } />
    </Fragment>
  );
}

export default App;
