import React, { useState } from 'react';
import './toggle.css';

const Toggle = ({ 
  label,          // Метка для toggle
  onChange,       // HTML-событие onchange
  extraClass,     // HTML-атрибут class
  disabled,       // Отключенное состояние радио-кнопок
  size,           // Размер радио-кнопок: "small", "medium", "large"
  ...rest         // Дополнительные пропсы
}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  let toggleBoxClass = `toggle-box ${extraClass || ''}`.trim();
  
  // Применение стилей disabled, size пока в разработке
  if (disabled) {
    toggleBoxClass += ' disabled';
  }

  if (size) {
    toggleBoxClass += ` ${size}`;
  }

  return (
    <div className={toggleBoxClass} {...rest}>
      <label className="toggle">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      <span className="label">{label}</span>
    </div>
  );
};

export default Toggle;