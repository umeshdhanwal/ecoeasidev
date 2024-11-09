import { Button, Text, Heading } from "../../components";
import React from "react";

export default function ContactUsSection() {
  return (
    <>
      {/* contact us section */}
      <div className="mb-10 flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[130px] pl-[114px] pr-14 lg:gap-[97px] lg:px-5 md:gap-[97px] md:px-5 sm:gap-[65px]">
          <div className="flex w-[94%] flex-col items-start gap-[18px] py-[42px] lg:w-full md:w-full md:py-5 sm:py-4">
            <Heading
              as="h6"
              className="text-[40px] font-extrabold text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
            >
              Contact us!
            </Heading>
            <Text as="p" className="mb-1.5 text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
              <>
                For more information, please contact us.
                <br />
                info@ecoeasi.com
                <br />
                +353 89 243 8762
              </>
            </Text>
          </div>
          <Button shape="round" className="min-w-[224px] rounded-[36px] px-[34px] font-bold sm:px-4">
            Send an email
          </Button>
        </div>
      </div>
    </>
  );
}
