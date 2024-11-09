import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function EcoEasiAISection() {
  return (
    <>
      {/* eco easi a i section */}
      <div>
        <div className="flex items-center justify-end md:flex-col">
          <div className="flex w-[46%] flex-col items-start rounded-[50px] bg-blue_gray-50 py-[54px] pl-[60px] pr-14 md:w-full md:p-5 sm:px-5 sm:py-4">
            <Heading
              size="heading3xl"
              as="h3"
              className="text-[50px] font-extrabold text-gray-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
            >
              How EcoEasi uses AI?
            </Heading>
            <Text
              as="p"
              className="mt-4 w-[70%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[18px] md:w-full"
            >
              EcoEasi uses AI to support supplier SMEs and Mid-Sized Buyers in not just sourcing ESG data and
              prepopulating the answers to the VSME module questions (aligned to CSRD) but also scoring and assessing
              the results. In addition, each individual supplier report is reviewed and an overall report is provided to
              the buyer identifying scope for improvements, scoring and benchmarking.
            </Text>
            <Heading
              size="heading3xl"
              as="h4"
              className="mt-[22px] w-[68%] text-[50px] font-extrabold leading-[110%] text-gray-900 lg:w-full lg:text-[42px] md:w-full md:text-[34px] sm:text-[28px]"
            >
              Why EcoEasi’s Assessments and Reports are better?
            </Heading>
            <Text
              as="p"
              className="mt-[26px] w-[70%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[18px] md:w-full"
            >
              A key objectives of EcoEasi’s is to comply with the voluntary reporting framework for SMEs (VSME) and
              &quot;CSRD for Buyers. As a result EcoEasi’s assessment and reports are critically unabbreviated and
              reflect all VSME requirements. EcoEasi provides Buyers with an overall Report based on individual SME
              supplier reviews and ESG assessments allowing them to directly influence their SME supplier performance
            </Text>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                size="lg"
                shape="round"
                className="mb-3 mt-6 min-w-[196px] rounded-[34px] px-[34px] font-bold sm:px-4"
              >
                Learn more
              </Button>
            </a>
          </div>
          <Img
            src="images/img_image.svg"
            alt="Product Image"
            className="relative ml-[-208px] h-[850px] w-[42%] object-contain md:ml-0 md:w-full"
          />
        </div>
      </div>
    </>
  );
}
