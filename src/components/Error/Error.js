import React from 'react';
import { useTranslation } from "react-i18next";

import './Error.css';

const Error = ({ error }) => {

  const { t } = useTranslation('common');

  return (  
    error ? (
      <section className="error">
        <div className="container">
          <i className="fas fa-exclamation-triangle fa-6x"></i>
          <p>{t('error')}</p>
        </div>
      </section> 
    ) : false
  );
}
 
export default Error;