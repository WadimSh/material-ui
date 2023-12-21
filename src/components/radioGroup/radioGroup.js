import React, { useState } from "react";
import "./radioGroup.css";

const RadioGroup = ({ 
  options,        // Mассив объектов, представляющих варианты выбора для радио-кнопок
  onChange,       // HTML-событие onchange
  selectedValue,  // Значение, которое будет выбрано по умолчанию при первоначальной загрузке компонента
  name,           // Имя для группировки радио-кнопок
  extraClass,     // HTML-атрибут class
  disabled,       // Отключенное состояние радио-кнопок
  size,           // Размер радио-кнопок: "small", "medium", "large"
  ...rest         // Дополнительные пропсы
}) => {
  const [selectedOption, setSelectedOption] = useState(selectedValue || "");
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  
    if (onChange) {
      onChange(event.target.value);
    }
  };

  let radiogroupBlockClass = `radiogroup-block ${extraClass || ''}`.trim();
  
  // Применение стилей disabled, size пока в разработке
  if (disabled) {
    radiogroupBlockClass += ' disabled';
  }

  if (size) {
    radiogroupBlockClass += ` ${size}`;
  }
  
  return (
    <div className={radiogroupBlockClass} {...rest}>
      {options.map((option, index) => (
        <label key={index} className="radiogroup-box">
          <span className={`wrapper ${selectedOption == option.value ? 'wrapper-active' : ''}`}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
              className="input"
            />
            <span className="icons">
            <svg className="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </svg>
            <svg className={`point ${selectedOption == option.value ? 'point-active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
            </svg>
            </span>
          </span>
          <span className="label">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;