import React from "react";

const sizes = {
  headingxs: "text-[18px] font-bold lg:text-[15px]",
  headings: "text-[20px] font-semibold lg:text-[17px]",
  headingmd: "text-[22px] font-extrabold lg:text-[18px]",
  headinglg: "text-[30px] font-bold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  headingxl: "text-[36px] font-extrabold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  heading2xl: "text-[40px] font-extrabold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading3xl: "text-[50px] font-extrabold lg:text-[42px] md:text-[46px] sm:text-[40px]",
  heading4xl: "text-[75px] font-extrabold lg:text-[75px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "heading2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-nunito ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
