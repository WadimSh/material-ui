import React from 'react';
import './button.css';

const Button = ({
  active,        // Применение стилей псевдокласса :active
  autoFocus,     // Установка фокуса на кнопку после загрузки страницы
  disabled,      // Отключенное состояние кнопки
  loading,       // Перевод кнопки в состояние загрузки
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

  if (active) {
    buttonClasses += ' active';
  }

  if (disabled || loading) {
    buttonClasses += ' disabled';
  }

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
      disabled={disabled || loading}
      autoFocus={autoFocus}
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