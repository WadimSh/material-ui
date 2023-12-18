import React from 'react';
import './textBlock.css';

const TextBlock = ({
  textArray,         // Массив текстовых строк для отображения
  extraClass,        // Дополнительный класс (HTML-атрибут class) для текстового блока
  tag: Tag = 'div',  // HTML-тег для обертки текстового блока (по умолчанию - 'div')
  paragraphClass,    // Дополнительный класс для стилизации параграфов
  paragraphProps,    // Дополнительные пропсы для всех параграфов
  ...rest            // Дополнительные пропсы
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