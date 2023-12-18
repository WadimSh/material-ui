import React from 'react';
import "./heading.css";

const Heading = ({ 
  level,      // Уровень заголовка (1-6)
  children,   // Внутреннее содержимое заголовка
  extraClass, // HTML-атрибут class
  ...rest     // Дополнительные пропсы
}) => {
  const validLevel = Math.min(level || 1, 6);
  const Tag = `h${validLevel}`;
  const className = `heading ${extraClass || ''}`.trim();

  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;