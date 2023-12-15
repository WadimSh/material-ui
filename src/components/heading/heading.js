import React from 'react';
import "./heading.css";

const Heading = ({ level, children, extraClass, ...rest }) => {
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