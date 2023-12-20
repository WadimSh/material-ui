import React, { useState } from "react";

const CheckBox = ({ 
  label,
  checked, 
  onChange, 
  extraClass, 
  required,       // Флаг, указывающий, является ли поле обязательным для заполнения
  active,         // Применение стилей псевдокласса :active
  autoFocus,      // Установка фокуса на поле ввода после загрузки страницы
  disabled,       // Отключенное состояние поля ввода
  size,           // Размер поля ввода: "small", "medium", "large"
  ...rest         // Дополнительные пропсы
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);

    if (onChange) {
      onChange(newCheckedValue);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        {...rest}
      />
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fill: "rgb(25, 118, 210)", marginBottom: "0px", flexShrink: "0",}}><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
      {label}
    </label>
  );
};

export default CheckBox;