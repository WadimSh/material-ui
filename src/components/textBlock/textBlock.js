import React from 'react';
import './textBlock.css';

const TextBlock = ({
  textArray,
  extraClass,
  tag: Tag = 'div',
  paragraphClass,
  paragraphProps,
  ...rest
}) => {
  const className = `textblock ${extraClass || ''}`.trim();

  return (
    <Tag className={className} {...rest}>
      {textArray.map((text, index) => (
        <p key={index} className={paragraphClass} {...paragraphProps}>
          {text}
        </p>
      ))}
    </Tag>
  );
};

export default TextBlock;