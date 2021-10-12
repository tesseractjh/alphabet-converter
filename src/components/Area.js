import React, { useRef } from 'react';
import TEXT from '../text';
import LanguageSwitch from './LanguageSwitch';

function Area(props) {

  const { language, alphabet, isLeft, handleRadioChange, updateInfo, text } = props;
  const title = alphabet === 'cyr' ? 'CYRILLIC' : 'LATIN';
  const isCyr = alphabet === 'cyr' ? true : false;
  const maxLength = 30000;
  const textarea = useRef();

  const handleChange = e => {
    updateInfo(isCyr, e.target.value);
  };
  const copyText = () => {
    textarea.current.select();
    textarea.current.setSelectionRange(0, 99999);
    document.execCommand('copy');
    textarea.current.setSelectionRange(0, 0);
  }
  const clearText = () => {
    updateInfo(isCyr, '');
  }

  return (
    <div className="area">
      <div className="alphabet">
        <h2>{TEXT[language][title]}</h2>
      </div>
      <LanguageSwitch language={language} name={alphabet} isLeft={isLeft} handleRadioChange={handleRadioChange} />
      <textarea className="textarea" value={text} onChange={handleChange} maxLength={maxLength} ref={textarea}></textarea>
      <div className="bottom">
        <div className="button copy-button" onClick={copyText}>{TEXT[language].COPY}</div>
        <div className="button clear-button" onClick={clearText}>{TEXT[language].CLEAR}</div>
        <div className="word-limit">{`${text.length}/${maxLength}`}</div>
      </div>
    </div>
  )
}

export default Area;