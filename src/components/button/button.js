import React from 'react';
import "./button.css";

const  Button = ({ htmiType, onClick, children, className, ...rest }) => {
  const buttonClassName = `button ${className || ''}`;

  return (
    <button type={htmiType} onClick={onClick} className={buttonClassName} {...rest}>
      {children || 'label'}
    </button>
  )
};

export default Button;