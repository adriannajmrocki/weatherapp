import React from 'react';

import clearDay from '../../utils/clear-day.svg';
import thunderstorms from '../../utils/thunderstorms.svg';
import cloudy from '../../utils/cloudy.svg';
import drizzle from '../../utils/drizzle.svg';
import rain from '../../utils/rain.svg';
import snow from '../../utils/snow.svg';
import tornado from '../../utils/tornado.svg';

import './CurrentWeather.css';

const CurrentWeather = ({ currentWeather, display }) => {

  const setIcon = weather => {
    switch(weather) {
      case 'Thunderstorm':
        return thunderstorms;
      case 'Drizzle':
        return drizzle;
      case 'Rain':
        return rain;
      case 'Snow':
        return snow;
      case 'Atmosphere':
        return tornado;
      case 'Clear':
        return clearDay;
      case 'Clouds':
        return cloudy;
      default:
        return;
    }
  }
  
  return (  
    display ? (
      <section className="current-weather">
        <div className="container">
          <h1 className="city">{currentWeather.city}, {currentWeather.country}</h1>
          <div className="icon-temp">
            <div className="icon-div">
              <img src={setIcon(`${currentWeather.icon}`)} alt="" className="icon" />
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
              <i className="fas fa-thermometer-half fa-2x"></i>
              <div>
                <p className="cond-title">Odczuwalna</p>
                <p className="value">{currentWeather.feelsLike}&#8451;</p>
              </div>
            </div>
            <div className="clouds">
              <i className="fas fa-cloud fa-2x"></i>
              <div>
                <p className="cond-title">Zachmurzenie</p>
                <p className="value">{currentWeather.clouds}%</p>
              </div>
            </div>
            <div className="wind">
              <i className="fas fa-wind fa-2x"></i>
              <div>
                <p className="cond-title">Wiatr</p>
                <p className="value">{currentWeather.wind} km/h</p>
              </div>
            </div>
            <div className="pressure">
              <i className="fas fa-level-down-alt fa-2x"></i>
              <div>
                <p className="cond-title">Ciśnienie</p>
                <p className="value">{currentWeather.pressure} hPa</p>
              </div>
            </div>
            <div className="humidity">
              <i className="fas fa-tint fa-2x"></i>
              <div>
                <p className="cond-title">Wilgotność</p>
                <p className="value">{currentWeather.humidity}%</p>
              </div>
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