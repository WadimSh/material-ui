import React from 'react';
import './button.css';

const Button = ({
  disabled,      // Отключенное состояние кнопки
  extraClass,    // HTML-атрибут class
  iconBefore,    // Иконка слева от текста кнопки
  iconAfter,     // Иконка справа от текста кнопки
  onBlur,        // HTML-событие onblur
  onClick,       // HTML-событие onclick
  onFocus,       // HTML-событие onfocus
  size,          // Размер кнопки: "small", "medium", "large"
  style,         // HTML-атрибут style
  title,         // HTML-атрибут title
  type,          // HTML-атрибут type
  children,      // Внутреннее содержимое кнопки
  ...rest        // Дополнительные пропсы
}) => {
  let buttonClasses = `button ${extraClass || ''}`.trim();

  if (size) {
    buttonClasses += ` ${size}`;
  }

  // Обработчики событий кнопки
  const buttonEvents = {
    onBlur,
    onClick,
    onFocus,
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      style={{ ...style }}
      title={title}
      type={type}
      {...buttonEvents}
      {...rest}
    >
      {iconBefore && <span className="before">{iconBefore}</span>}
      {children}
      {iconAfter && <span className="after">{iconAfter}</span>}
    </button>
  );
};

export default Button;