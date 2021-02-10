import React from 'react';

import './Home.css';

const Home = ({ show }) => {
  return (  
    show ? (
      <section className="home">
        <div className="container">
          <h1 className="title">Weather App</h1>
          <p className="intro">Witaj w Weather App - prostej aplikacji pogodowej, stworzonej dzięki <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OpenWeatherMap</a>. Wpisz nazwę swojego miasta w wyszukiwarkę, by wyświetlić wyniki.</p>
          <a className="repo" href="https://github.com/adriannajmrocki/weatherapp" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-2x"></i>
              Repozytorium GitHub
          </a>
        </div>
      </section>
    ) : false
  );
}
 
export default Home;