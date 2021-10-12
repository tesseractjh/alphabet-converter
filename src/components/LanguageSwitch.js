import React from 'react';
import TEXT from '../text';
import SwitchButton from './SwitchButton';

function LanguageSwitch(props) {

  const { language, name, isLeft, handleRadioChange } = props;
  const left = isLeft ? ' checked-button' : '';
  const right = isLeft ? '' : ' checked-button';

  return (
    <div className="language-switch">
      <SwitchButton
      name={name} direction="left" addedClass={left}
      handleRadioChange={handleRadioChange}
      switchLanguage={TEXT[language].UZBEK} />
      <SwitchButton
      name={name} direction="right" addedClass={right}
      handleRadioChange={handleRadioChange}
      switchLanguage={TEXT[language].KAZAKH} />
    </div>
  )
}

export default LanguageSwitch;