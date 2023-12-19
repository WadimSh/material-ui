import React from 'react';
import './button.css';

const Button = ({
  active,        // Применение стилей псевдокласса :active
  align,         // Выравнивание текста кнопки (CSS-свойство text-align)
  autoFocus,     // Установка фокуса на кнопку после загрузки страницы
  borderless,    // Убирание обводки у кнопки
  extraClass,    // HTML-атрибут class
  disabled,      // Отключенное состояние кнопки
  error,         // Состояние валидации при ошибке
  icon,          // Иконка слева от текста кнопки
  loading,       // Перевод кнопки в состояние загрузки
  onBlur,        // HTML-событие onblur
  onClick,       // HTML-событие onclick
  onFocus,       // HTML-событие onfocus
  onKeyDown,     // HTML-событие keydown
  onMouseEnter,  // HTML-событие onmouseenter
  onMouseLeave,  // HTML-событие mouseleave
  onMouseOver,   // HTML-событие onmouseover
  size,          // Размер кнопки: "small", "medium", "large"
  style,         // HTML-атрибут style
  title,         // HTML-атрибут title
  type,          // HTML-атрибут type
  use,           // Стиль кнопки: "default", "primary", "success", "danger", "pay", "link", "text", "backless"
  warning,       // Состояние валидации при предупреждении
  width,         // CSS-свойство width (строка или число)
  children,      // Внутреннее содержимое кнопки
  ...rest        // Дополнительные пропсы
}) => {
  const buttonStyles = {
    textAlign: align,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  let buttonClasses = `button ${extraClass || ''}`.trim();

  if (active) {
    buttonClasses += ' active';
  }

  if (borderless) {
    buttonClasses += ' borderless';
  }

  if (disabled || loading) {
    buttonClasses += ' disabled';
  }

  if (error) {
    buttonClasses += ' error';
  }

  if (size) {
    buttonClasses += ` ${size}`;
  }

  if (use) {
    buttonClasses += ` ${use}`;
  }

  if (warning) {
    buttonClasses += ' warning';
  }

  // Обработчики событий кнопки
  const buttonEvents = {
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      autoFocus={autoFocus}
      style={{ ...buttonStyles, ...style }}
      title={title}
      type={type}
      {...buttonEvents}
      {...rest}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;