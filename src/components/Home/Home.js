import React from 'react';
import { useTranslation } from "react-i18next";

import './Home.css';

const Home = ({ show }) => {

  const { t } = useTranslation('common');

  return (  
    show ? (
      <section className="home">
        <div className="container">
          <h1 className="title">Weather App</h1>
          <p className="intro">{t('intro-1')} <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeatherMap</a>. {t('intro-2')}</p>
          <a className="repo" href="https://github.com/adriannajmrocki/weatherapp" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-2x"></i>
              {t('git')}
          </a>
        </div>
      </section>
    ) : false
  );
}
 
export default Home;