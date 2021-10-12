import React from 'react';
import TEXT from '../text';
import LanguageSelection from './LanguageSelection';

function Header(props) {

  return (
    <header className="header">
      <h2 id="title">{ TEXT[props.language].TITLE }</h2>
      <LanguageSelection setLanguage={props.setLanguage} />
    </header>
  )
}

export default Header;