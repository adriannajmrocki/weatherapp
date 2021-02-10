import React from 'react';

import './Error.css';

const Error = ({ error }) => {
  return (  
    error ? (
      <section className="error">
        <div className="container">
          <i className="fas fa-exclamation-triangle fa-6x"></i>
          <p>Nie znaleziono miasta którego szukasz</p>
        </div>
      </section> 
    ) : false
  );
}
 
export default Error;