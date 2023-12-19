import React, { useState, useRef, useEffect } from 'react';
import './input.css';

const Input = ({ 
  value,
  label,
  onChange,
  validateInput,
  iconBefore, 
  iconAfter, 
  extraClass,
  required,
  ...rest 
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState('');
  const [active, setActive] = useState(false);
  const [focy, setFocy] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
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

  return (
    <div className={`input-box ${extraClass || ''}`} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      {label && <label className={`${iconBefore ? 'label label-shift' : 'label'} ${active || inputValue || focy ? 'label-active' : ''}`}>{label}</label>}
      <div className={`${error ? 'wrapper wrapper-error' : 'wrapper'} ${active || inputValue || focy ? 'wrapper-active' : ''}`}>
        {iconBefore && <span className="icon-before">{iconBefore}</span>}
        <input
          ref={inputRef}
          type='text'
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          className='input'
          {...rest}
        />
        {iconAfter && <span className="icon-after">{iconAfter}</span>}
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;