import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[34px]",
};
const variants = {
  fill: {
    purple_A700: "bg-purple-a700 text-white-a700",
    deep_purple_A400: "bg-deep_purple-a400 text-white-a700",
    white_A700: "bg-white-a700 text-gray-900",
    green_500_02: "bg-green-500_02 text-white-a700",
  },
  outline: {
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-900",
  },
};
const sizes = {
  xs: "h-[18px] px-3 text-[6px]",
  md: "h-[60px] px-0.5",
  sm: "h-[54px] px-[34px] text-[18px]",
  lg: "h-[68px] px-[34px] text-[18px]",
  xl: "h-[74px] px-[34px] text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "md", "sm", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["purple_A700", "deep_purple_A400", "white_A700", "green_500_02", "blue_gray_100"]),
};

export { Button };
