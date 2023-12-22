import React, { useState, useRef, useEffect } from 'react';
import './textInput.css';

const TextInput = ({ 
  value,          // Значение ввода
  label,          // Метка для поля ввода
  onChange,       // HTML-событие onchange
  validateInput,  // Функция для валидации ввода
  iconBefore,     // Иконка, отображаемая перед полем ввода
  iconAfter,      // Иконка, отображаемая после поля ввода
  extraClass,     // HTML-атрибут class
  required,       // Флаг, указывающий, является ли поле обязательным для заполнения
  ...rest         // Дополнительные пропсы
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [error, setError] = React.useState('');
  const [active, setActive] = React.useState(false);
  const [focy, setFocy] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.contains(inputRef.current)) {
        setFocy(false);
      } else {
        setFocy(true);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setError('');

    if (validateInput) {
      validateInput(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleBlur = () => {
    if (validateInput) { 
      validateInput(inputValue);
    } else {
      if (!inputValue && required) {
        setError('Поле не может быть пустым');
      } else if (inputValue && inputValue.length < 2) {
        setError('Поле должно содержать минимум 2 символа');
      }
    }
  };

  const inputBoxClass = `textinput-box ${extraClass || ''}`.trim();
  const labelClass = `${iconBefore ? 'label label-shift' : 'label'} ${active || inputValue || focy ? 'label-active' : ''}`.trim();
  const wrapperClass = `${error ? 'wrapper wrapper-error' : 'wrapper'} ${active || inputValue || focy ? 'wrapper-active' : ''}`.trim();

  return (
    <div className={inputBoxClass} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      {label && <label className={labelClass}>{label}</label>}
      <div className={wrapperClass}>
        {iconBefore && <span className="icon-before">{iconBefore}</span>}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className="textinput"
          {...rest}
        />
        {iconAfter && <span className="icon-after">{iconAfter}</span>}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default TextInput;