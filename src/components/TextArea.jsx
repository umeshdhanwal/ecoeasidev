import React from 'react';

const TextArea = ({
  shape = "round",
  name,
  placeholder,
  value,
  onChange,
  className = "",
  ...restProps
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`min-h-[100px] w-full resize-none ${
        shape === "round" ? "rounded-lg" : ""
      } ${className}`}
      {...restProps}
    />
  );
};

export default TextArea;
