import React from 'react';
import './button.css';

const Button = ({
  extraClass,    // HTML-атрибут class
  iconBefore,    // Иконка слева от текста кнопки
  iconAfter,     // Иконка справа от текста кнопки
  onBlur,        // HTML-событие onblur
  onClick,       // HTML-событие onclick
  onFocus,       // HTML-событие onfocus
  style,         // HTML-атрибут style
  title,         // HTML-атрибут title
  type,          // HTML-атрибут type
  children,      // Внутреннее содержимое кнопки
  ...rest        // Дополнительные пропсы
}) => {
  // Обработчики событий кнопки
  const buttonEvents = {
    onBlur,
    onClick,
    onFocus,
  };

  let buttonClasses = `button ${extraClass || ''}`.trim();

  if (iconBefore) {
    buttonClasses += ' button-left';
  }

  if (iconAfter) {
    buttonClasses += ' button-right';
  }

  return (
    <button
      className={buttonClasses}
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