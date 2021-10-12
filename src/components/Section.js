import React, { useState } from 'react';
import Area from './Area';
import convert from '../converter/convertUzbek';

function Section(props) {
  const { language } = props;
  const [ isLeft, setIsLeft ] = useState(true);
  const [ text, setText ] = useState('');
  const [ isCyrillic, setIsCyrillic ] = useState('');
  const handleRadioChange = isLeftChecked => {
    setIsLeft(isLeftChecked);
  };
  const updateInfo = (isCyr, text) => {
    setIsCyrillic(isCyr);
    setText(text);
  };

  const cyrText = isCyrillic ? text : convert(text, true);
  const latText = isCyrillic ? convert(text) : text;

  return (
    <section className="section">
      <Area language={language} alphabet="cyr" isLeft={isLeft}
      handleRadioChange={handleRadioChange}
      updateInfo={updateInfo}
      text={cyrText} />
      <Area language={language} alphabet="lat" isLeft={isLeft}
      handleRadioChange={handleRadioChange}
      updateInfo={updateInfo}
      text={latText} />
    </section>
  )
}

export default Section;