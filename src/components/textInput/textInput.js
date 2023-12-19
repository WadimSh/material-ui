import React, { useRef, useState, useEffect } from 'react';

const TextInput = ({
  autoComplete,       // Опция автозаполнения для input
  autoFocus,          // Фокусировка на input при монтировании
  defaultValue,       // Начальное значение input
  disabled,
  error: externalError,  // Внешняя ошибка (переименованная для избежания конфликтов с reserved words)
  fullWidth,          // Занимает ли input всю доступную ширину
  inputProps,         // Дополнительные свойства для input, включая функцию валидации
  inputRef,           // Ref для доступа к DOM-элементу input
  label,              // Метка, отображаемая перед input
  onChange,           // Обработчик изменения значения input
  placeholder,        // Текст-плейсхолдер input
  readOnly,           // Только для чтения input
  required,           // Обязательное поле input
  startAdornment,     // Элемент, добавляемый в начало input
  type,               // Тип input (например, 'text', 'password', и т. д.)
  value,              // Значение input
}) => {
  const internalInputRef = useRef();
  const [internalError, setInternalError] = useState('');

  // Валидация введенного значения при монтировании компонента
  useEffect(() => {
    validateInput(value);
  }, [value]);

  const handleInputChange = (inputValue) => {
    onChange(inputValue);
    validateInput(inputValue);
  };

  const validateInput = (inputValue) => {
    // Проверка наличия функции валидации и вызов ее, если она передана
    if (inputProps && inputProps.validation && typeof inputProps.validation === 'function') {
      const errorMessage = inputProps.validation(inputValue);
      setInternalError(errorMessage);
    } else {
      // Если функция валидации не передана, проверяем, что поле не пустое
      if (inputValue.trim() === '' && required) {
        setInternalError('Это поле обязательно');
      } else {
        setInternalError('');
      }
    }
  };

  return (
    <div className={`form-control ${fullWidth ? 'full-width' : ''} ${externalError ? 'error' : ''}`}>
      {label && <label>{label}</label>}
      {startAdornment && <div className="adornment start">{startAdornment}</div>}
      <input
        ref={(ref) => {
          internalInputRef.current = ref;
          if (typeof inputRef === 'function') {
            inputRef(ref);
          } else if (inputRef) {
            inputRef.current = ref;
          }
        }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {externalError && <span className="error-text">{externalError}</span>}
      {internalError && <span className="error-text">{internalError}</span>}
    </div>
  );
};

export default TextInput;