import React from "react";
import { Text } from "..";

const SupportOptions = ({ callSupportText, manualText, automatedText, className, ...props }) => {
  return (
    <div className={`flex justify-between rounded-[5px] p-2.5 ${className}`} {...props}>
      <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
        {callSupportText}
      </Text>
      <div className="flex justify-between w-[40%]">
        <Text
          size="textmd"
          as="p"
          className="text-[18px] font-normal !text-deep_purple-a400 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0"
        >
          {manualText}
        </Text>
        <Text
          size="textmd"
          as="p"
          className="text-[18px] font-normal !text-deep_purple-a400 lg:text-[15px] w-[48%] text-right"
        >
          {automatedText}
        </Text>
      </div>
    </div>
  );
};

export default SupportOptions;
