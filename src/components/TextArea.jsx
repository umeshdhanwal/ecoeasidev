import React, { useEffect, useRef } from 'react';

const TextArea = ({
  shape = "round",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  ...restProps
}) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (e) => {
    onChange(e);
    adjustHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`w-full resize-none overflow-hidden ${
        shape === "round" ? "rounded-lg" : ""
      } ${className}`}
      {...restProps}
    />
  );
};

export default TextArea;
