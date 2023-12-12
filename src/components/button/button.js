import React from 'react';
import "./button.css";

function  Button({ htmiType, onClick, children, ...rest }) {
  return (
    <button type={htmiType} onClick={onClick} className="button" {...rest}>
      {children || 'label'}
    </button>
  )
};

export default Button;