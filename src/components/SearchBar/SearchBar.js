import React from 'react';
import { useTranslation } from "react-i18next";

import './SearchBar.css';

const SearchBar = ({ value, changeValue, submit }) => {

  const { t, i18n } = useTranslation('common');

  return (  
    <header className="header">
      <form className="search-form" onSubmit={ submit }>
        <label className="search-label">
          <input type="text" placeholder={`${t('enter-city')}`} value={ value } onChange={ changeValue } />
          <button className="search-btn"><i className="fas fa-search fa-2x"></i></button>
        </label>
      </form>
      <button className="lang" onClick={() => i18n.changeLanguage('pl')}><img src="https://flagcdn.com/pl.svg" width="30" alt="Poland"></img></button>
      <button className="lang" onClick={() => i18n.changeLanguage('en')}><img src="https://flagcdn.com/gb.svg" width="30" alt="United Kingdom"></img></button>
    </header>
  );
}
 
export default SearchBar;