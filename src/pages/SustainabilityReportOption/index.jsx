import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function SustainabilityReportOptionPage() {
  return (
    <>
      <Helmet>
        <title>Create Your Sustainability Report with EcoEasi</title>
        <meta
          name="description"
          content="EcoEasi simplifies the creation of CSRD-aligned ESG Assessments & Reports for Supply Chain SMEs. Join our platform for a detailed, low-cost sustainability reporting solution."
        />
      </Helmet>
      <div className="relative h-[2078px] w-full bg-white-a700 lg:h-auto md:h-auto">
        <Img src="images/img_background_patterns.svg" alt="Background Image" className="h-[808px] flex-1" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-10">
          <Header />
          <div className="flex justify-center py-[42px] md:py-5 sm:py-4">
            <div className="container-xs mb-4 flex items-start justify-center lg:px-5 md:flex-col md:px-5">
              <div className="flex flex-1 flex-col items-start gap-[30px] md:self-stretch">
                <Heading size="heading5xl" as="h1" className="text-[75px] font-extrabold text-gray-900 lg:text-[48px] md:text-[48px]">
                  All Modules
                </Heading>
                <Text size="text3xl" as="p" className="w-[94%] text-[25px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[21px] md:w-full">
                  As a result of European legislation, Supply Chain SMEs may be required to provide an ESG Assessment & Report which follows the rules set out in the CSRD (basic) and is also aligned to CPD.
                </Text>
                <div className="flex flex-col items-start gap-5 self-stretch">
                  <Heading size="heading2xl" as="h2" className="text-[40px] font-extrabold text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]">
                    The process involves three steps:
                  </Heading>
                  <div className="flex flex-col items-start gap-10 self-stretch">
                    <Text as="p" className="w-[94%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[18px] md:w-full">
                      EcoEasi combines your information (uploaded accounts and answers to questions posed by EcoEasi’s avatar) with sourced information to create the Sustainability Report you need.
                    </Text>
                    <Text as="p" className="w-[94%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[18px] md:w-full">
                      <span className="font-bold text-gray-900">01</span>
                      <span className="text-gray-600">. Join the platform<br /><br /></span>
                      <span className="font-bold text-gray-900">02</span>
                      <span className="text-gray-600">. Answer the questions in the free/low cost assessment that follow CSRD’s voluntary reporting framework VSME<br /><br /></span>
                      <span className="font-bold text-gray-900">03. Submit the assessment & resulting report for free/low cost to your customer.</span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex w-[46%] flex-col items-end self-center md:w-full">
                <div className="flex w-[94%] flex-col items-start rounded-[30px] bg-gray-50 p-[52px] lg:w-full md:w-full md:p-5 sm:p-4">
                  <div className="mr-5 flex flex-col items-start gap-2.5 self-stretch md:mr-0">
                    <Heading size="heading3xl" as="h3" className="text-[45px] font-extrabold text-gray-900 lg:text-[38px] md:text-[29px] sm:text-[23px]">
                      Features
                    </Heading>
                    <Text size="text3xl" as="p" className="w-full text-[25px] font-normal leading-[157.4%] text-gray-600 lg:text-[21px]">
                      For SMEs who have ESG strategy built in and also want to be Business Partners.
                    </Text>
                  </div>
                  <div className="mt-[42px] flex flex-col gap-4 self-stretch">
                    <div className="mx-6 flex items-start justify-center gap-4 md:mx-0 sm:flex-col">
                      <Img src="images/img_material_symbol.svg" alt="Materiality Icon" className="h-[24px] w-[24px] sm:w-full" />
                      <Text as="p" className="w-[94%] self-center text-[20px] font-normal leading-[244.4%] text-gray-600 lg:text-[18px] sm:w-full">
                        <span className="text-gray-600">Detailed&nbsp;</span>
                        <span className="font-bold text-deep_purple-a400">Materiality Assessment</span>
                        <span className="text-gray-600">&nbsp;template and draft</span>
                      </Text>
                    </div>
                    <div className="mx-6 flex items-start gap-4 md:mx-0 sm:flex-col">
                      <Img src="images/img_material_symbol.svg" alt="Carbon Icon" className="h-[24px] w-[24px] sm:w-full" />
                      <Text as="p" className="self-center text-[20px] font-normal text-gray-600 lg:text-[18px]">
                        <span className="font-bold text-deep_purple-a400">Carbon Footprint Report</span>
                        <span className="text-gray-600">&nbsp;Scope (1 & 2)</span>
                      </Text>
                    </div>
                    <div className="flex items-start gap-4 px-6 sm:px-4">
                      <Img src="images/img_material_symbol.svg" alt="Ai Icon" className="h-[24px] w-[24px]" />
                      <Heading size="headings" as="h4" className="self-center text-[20px] font-bold text-deep_purple-a400 lg:text-[17px]">
                        AI support
                      </Heading>
                    </div>
                    <div className="mx-6 flex items-start justify-center gap-4 md:mx-0 sm:flex-col">
                      <Img src="images/img_material_symbol.svg" alt="Modules Icon" className="h-[24px] w-[24px] sm:w-full" />
                      <Heading size="headings" as="h5" className="w-[94%] self-center text-[20px] font-bold leading-[27px] text-deep_purple-a400 lg:text-[17px] sm:w-full">
                        <span className="font-normal text-gray-600">BM + PAT + BP Modules&nbsp;</span>
                        <span className="text-deep_purple-a400">= ESG Assessment and Report</span>
                      </Heading>
                    </div>
                  </div>
                  <Heading size="heading5xl" as="h6" className="mt-[26px] text-[75px] font-extrabold text-gray-900 lg:text-[48px] md:text-[48px]">
                    Low Cost
                  </Heading>
                  <Button 
                    shape="round" 
                    className="mb-2.5 mt-[30px] self-stretch min-w-[246px] rounded-[34px] px-[34px] font-bold sm:px-4 
                      bg-white text-grey-a400 border border-deep_purple-a400
                      hover:bg-deep_purple-a400 hover:!text-white
                      transition-colors duration-300 flex flex-row items-center justify-center text-center 
                      cursor-pointer whitespace-nowrap h-[68px] text-[18px]"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="container-xs mb-10 flex flex-col gap-[146px] lg:gap-[109px] lg:px-5 md:gap-[109px] md:px-5 sm:gap-[73px]">
              <div className="h-px bg-gray-300_02" />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}