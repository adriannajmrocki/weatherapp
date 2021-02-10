import React, { useEffect } from 'react';

import clearDay from '../../utils/clear-day.svg'

import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather, display }) => {
  
  return (  
    display ? (
      <section className="current-weather">
        <div className="container">
          <h1 className="city">{currentWeather.city}, {currentWeather.country}</h1>
          <div className="icon-temp">
            <div className="icon-div">
              {/* <img src={currentWeather.icon} alt="" /> */}
              <img src={clearDay} alt="" className="icon" />
            </div>
            <div className="temps">
              <div className="temp">{currentWeather.temp}&#8451;</div>
              <div className="min-max-temp">
                <div className="max-temp">
                  <i className="fas fa-arrow-up"></i>
                  <div className="max">{currentWeather.maxTemp}&#8451;</div>
                </div>
                <div className="min-temp">
                  <i className="fas fa-arrow-down"></i>
                  <div className="min">{currentWeather.minTemp}&#8451;</div>
                </div>
              </div>
            </div>
          </div>
          <div className="other-conditions">
            <div className="feels-like">
              <i className="fas fa-thermometer-half"></i>
              <p className="cond-title">Odczuwalna</p>
              <p>{currentWeather.feelsLike}</p>
            </div>
            <div className="clouds">
              <i className="fas fa-cloud"></i>
              <p className="cond-title">Zachmurzenie</p>
              <p>{currentWeather.clouds}</p>
            </div>
            <div className="wind">
              <i className="fas fa-wind"></i>
              <p className="cond-title">Wiatr</p>
              <p>{currentWeather.wind}</p>
            </div>
            <div className="pressure">
              <i className="fas fa-level-down-alt"></i>
              <p className="cond-title">Ciśnienie</p>
              <p>{currentWeather.pressure}</p>
            </div>
            <div className="humidity">
              <i className="fas fa-tint"></i>
              <p className="cond-title">Wilgotność</p>
              <p>{currentWeather.humidity}</p>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div>BRAK DANYCH</div>
    )
  );
}
 
export default CurrentWeather;