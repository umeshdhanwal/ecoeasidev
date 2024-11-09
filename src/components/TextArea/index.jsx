import React from 'react';

const TextArea = ({ 
  shape = "round",
  name,
  placeholder,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${shape === "round" ? "rounded-lg" : ""} ${className}`}
      {...props}
    />
  );
};

export default TextArea;
