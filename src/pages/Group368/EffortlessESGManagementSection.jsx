import { Img, Text, Heading, Button } from "../../components";
import React from "react";

export default function EffortlessESGManagementSection() {
  return (
    <>
      <div className="mt-[204px] w-full">
        <div className="mb-[76px] flex items-center justify-between gap-5 md:flex-col">
          <div className="relative h-[658px] w-[94%] content-center lg:h-auto md:h-auto md:w-full">
            <div className="container-xs flex items-center justify-center lg:px-5 md:flex-col md:px-5">
              <div className="flex flex-1 flex-col items-start gap-[34px] md:self-stretch">
                <Heading
                  size="heading4xl"
                  as="h1"
                  className="w-[80%] text-[75px] font-extrabold leading-[110%] text-gray-900 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                >
                  Effortlessly manage ESG data from your SME suppliers with EcoEasi!
                </Heading>
                <Text
                  size="text3xl"
                  as="p"
                  className="w-[80%] text-[25px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[21px] md:w-full"
                >
                  Are you a mid-sized buyer who wants to get ESG data from your SME suppliers? If yes, then
                  contact us to buy a low-cost Supply Chain ESG Reporting Platform that analyzes SME supplier
                  data.
                </Text>
                <Button
                  size="lg"
                  shape="round"
                  className="min-w-[246px] rounded-[34px] px-[34px] font-bold sm:px-4 
                     bg-white text-grey-a400 border-4 border-green-a400
                     hover:bg-green-800 hover:text-white hover:border-green-800
                     transition-colors duration-300"
                >
                  Mid-Sized Buyers Get started
                </Button>
              </div>
              <div className="flex w-[34%] flex-col gap-[42px] rounded-[40px] bg-white-a700 px-8 py-[82px] lg:py-8 md:w-full md:py-5 sm:p-4">
                <Img src="images/img_icon.svg" alt="Feature Icon" className="mx-7 h-[254px] md:mx-0" />
                <div className="flex flex-col gap-[22px]">
                  <Heading
                    size="headinglg"
                    as="h2"
                    className="text-center text-[30px] font-bold leading-[110%] text-gray-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                  >
                    Standard & Pro ESG Assessments & Reports
                  </Heading>
                  <Text
                    as="p"
                    className="text-center text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]"
                  >
                    For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME
                    suppliers.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
