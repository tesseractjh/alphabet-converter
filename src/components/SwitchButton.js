import React, { useRef } from 'react';

function SwitchButton(props) {

  const { handleRadioChange, name, direction, addedClass, switchLanguage } = props;
  const radioRef = useRef(null);

  const handleClick = () => {
    if (!radioRef.current.checked) return;
    if (direction === 'left') {
      handleRadioChange(true);
    } else {
      handleRadioChange(false);
    }
  };
  
  return (
    <label className={`switch-button ${direction}-button${addedClass}`}>
      <div className="radio-text">
        <input className="radio" ref={radioRef} type="radio" name={name} onClick={handleClick}></input>
        { switchLanguage }
      </div>
    </label>
  )
}

export default SwitchButton;