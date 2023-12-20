import React, { useState } from "react";
import "./checkBox.css";

const CheckBox = ({ 
  label,       // Метка для checkbox
  checked,     // Значение состояния checkbox
  onChange,    // HTML-событие onchange
  extraClass,  // HTML-атрибут class
  required,    // Флаг, указывающий, является ли checkbox обязательным для заполнения
  disabled,    // Отключенное состояние checkbox
  size,        // Размер checkbox: "small", "medium", "large"
  ...rest      // Дополнительные пропсы
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (onChange) {
      onChange(newCheckedValue);
    }
  };

  let checkboxBlockClass = `checkbox-block ${extraClass || ''}`.trim();
  
  // Применение стилей disabled, size пока в разработке
  if (disabled) {
    checkboxBlockClass += ' disabled';
  }

  if (size) {
    checkboxBlockClass += ` ${size}`;
  }

  const wrapperClass = `wrapper ${isChecked ? 'wrapper-active' : ''}`.trim();

  return (
    <label className={checkboxBlockClass}>
      <span className={wrapperClass}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="input"
          {...rest}
        />
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="check-input"
        >
          {isChecked ? 
          <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
          :
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
          }
        </svg>
      </span>
      <span className="label">
        {required ? label + '*' : label}
      </span>
    </label>
  );
};

export default CheckBox;