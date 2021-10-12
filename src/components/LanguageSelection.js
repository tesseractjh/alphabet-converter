import React from 'react';

function LanguageSelection(props) {

  const handleChange = e => {
    const { value } = e.target;
    props.setLanguage(value);
  };

  return (
    <select className="language-selection" onChange={handleChange}>
      <option value="eng">English</option>
      <option value="kor">한국어</option>
      <option value="uz">Oʻzbekcha</option>
      <option value="qaz">Қазақша</option>
      <option value="rus">Русский</option>
    </select>
  )
}

export default LanguageSelection;