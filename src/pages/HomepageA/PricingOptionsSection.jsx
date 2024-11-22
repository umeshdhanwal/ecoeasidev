import { Heading, Button, Text } from "../../components";
import ESGReportComponent from "../../components/ESGReportComponent";
import React from "react";

export default function PricingOptionsSection() {
  return (
    <>
      {/* pricing options section */}
      <div id="pricing" className="mt-[162px] flex flex-col items-center gap-[66px] self-stretch sm:gap-[33px]">
        <div className="container-xs flex flex-col items-center px-[50px] lg:px-5 md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[50px] font-extrabold text-gray-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
          >
            Pricing options for Suppliers SMEs & Mid-Sized Buyers
          </Heading>
        </div>
        <div className="flex justify-center self-stretch">
          <div className="container-xs flex justify-center lg:px-5 md:px-5">
            <div className="flex w-full items-stretch gap-[30px] md:flex-col">
              <div className="flex flex-1 flex-col items-center gap-3 md:w-full bg-gray-50 p-[34px] sm:p-4 rounded-[30px] border-2 border-deep_purple-a400 w-[45%]">
                <Heading
                  size="headingxl"
                  as="h1"
                  className="mt-2.5 text-[32px] font-extrabold text-deep_purple-a400 lg:text-[28px] md:text-[28px] sm:text-[26px]"
                >
                  SMEs
                </Heading>
                <div className="flex flex-col items-center gap-5 self-stretch flex-grow">
                  <Heading
                    size="headingxl"
                    as="h1"
                    className="text-[30px] font-extrabold text-gray-900 lg:text-[26px] md:text-[26px] sm:text-[24px]"
                  >
                    All Modules
                  </Heading>
                  <Text
                    size="text2xl"
                    as="p"
                    className="self-stretch text-center text-[18px] font-normal leading-7 text-gray-900 lg:text-[16px]"
                  >
                    <>
                      EcoEasi will ensure that you comply with the correct module.
                      <br />
                      <br />
                      Basic Module + Narrative PAT Modules
                      <br />+ Business Partners Modules
                    </>
                  </Text>
                  <div className="flex w-[85%] flex-col items-center gap-2 lg:w-full md:w-full">
                    <div className="h-px w-full self-stretch bg-blue_gray-100" />
                    <Heading
                      as="h1"
                      className="text-[36px] font-extrabold text-gray-900 lg:text-[32px] md:text-[32px] sm:text-[30px]"
                    >
                      Low Cost!
                    </Heading>
                    <div className="h-px w-full self-stretch bg-blue_gray-100" />
                  </div>
                  <Text
                    size="textlg"
                    as="p"
                    className="self-stretch text-center text-[16px] font-normal leading-[24px] text-gray-600 lg:text-[14px]"
                  >
                    <span className="font-bold text-deep_purple-a400">Double Materiality Assessment&nbsp;</span>
                    <span className="text-gray-600">
                      <>
                        if applicable
                        <br />
                      </>
                    </span>
                    <span className="text-gray-600">
                      <>
                        <br />
                        Carbon Footprint Report Scope (1, 2 & 3)
                      </>
                    </span>
                    <span className="text-gray-600">
                      <>
                        &nbsp;if applicable 
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="font-bold text-deep_purple-a400">
                      <>
                        AI support
                        <br />
                      </>
                    </span>
                    <span className="text-gray-600">
                      <>
                        <br />
                        BM + PAT+ BP Modules&nbsp;
                      </>
                    </span>
                    <span className="font-bold text-deep_purple-a400">
                      <>
                        = Report including ESG assessment
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <Button
                  variant="outline"
                  shape="round"
                  className="mb-4 mt-auto min-w-[200px] rounded-[36px] !border border-deep_purple-a400 text-grey-a400 px-[33px] font-bold sm:px-4 hover:bg-deep_purple-a400 hover:text-white transition-colors duration-300"
                >
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 flex-col items-center gap-2.5 md:self-stretch bg-gray-50 p-[34px] sm:p-4 rounded-[30px] border-2 border-deep_purple-a400 w-[48%]">
                <Heading
                  size="headingxl"
                  as="h1"
                  className="mt-3.5 text-[36px] font-extrabold text-deep_purple-a400 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                >
                  Mid Sized Buyers
                </Heading>
                <div className="flex gap-[30px] self-stretch md:flex-col flex-grow">
                  <ESGReportComponent className="mb-20 md:mb-0" />
                  <ESGReportComponent
                    isPro={true}
                    subheadingText="For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME suppliers."
                    buttonText="Get Started"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}