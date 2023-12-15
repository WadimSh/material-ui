import React from 'react';
import "./button.css";

const  Button = ({ htmlType, onClick, children, extraClass, ...rest }) => {
  const сlassName = `button ${extraClass || ''}`.trim();

  return (
    <button type={htmlType} onClick={onClick} className={сlassName} {...rest}>
      {children || 'label'}
    </button>
  )
};

export default Button;