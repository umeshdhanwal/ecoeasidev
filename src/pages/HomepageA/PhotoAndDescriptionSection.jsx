import { Text, Heading, Img } from "../../components";
import React from "react";

export default function PhotoAndDescriptionSection() {
  return (
    <>
      {/* photo and description section */}
      <div className="flex items-center justify-between gap-5 px-[260px] lg:px-8 md:flex-col md:px-5 sm:px-4">
        <div className="flex rounded-[60px] bg-gray-400">
          <Img
            src="images/ecoeasi-mockup-2. 09.09.jpg"
            alt="Photo"
            className="h-[402px] w-full rounded-[60px] object-cover lg:h-auto md:h-auto"
          />
        </div>
        <div className="flex w-[44%] flex-col items-start gap-4 md:w-full">
          <Heading
            size="heading3xl"
            as="h2"
            className="text-[50px] font-extrabold text-gray-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
          >
            What EcoEasi does?
          </Heading>
          <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
            Collecting and disclosing ESG info is expensive and time consuming and takes a lot of specialist effort.
            Expensive consultants and pricey ESG Reporting software is not an option. EcoEasi connects business partners
            with its Supply Chain ESG Reporting Compliance Platform and also leverages AI to create CSRD aligned
            assessments and reports.{" "}
          </Text>
        </div>
      </div>
    </>
  );
}
