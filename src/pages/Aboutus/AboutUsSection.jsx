import { Text, Img, Heading } from "../../components";
import React from "react";
export default function AboutUsSection() {
  return (
    <>
      {" "}
      {/* about us section */}{" "}
      <div className="mt-[42px] flex flex-col items-center">
        {" "}
        <div className="container-xs flex flex-col items-start gap-[46px] lg:px-5 md:px-5">
          {" "}
          <Heading
            size="heading5xl"
            as="h1"
            className="text-[75px] font-extrabold text-gray-900 lg:text-[48px] md:text-[48px]"
          >
            {" "}
            About us{" "}
          </Heading>{" "}
          <div className="self-stretch">
            {" "}
            <div className="flex flex-col gap-[30px]">
              {" "}
              <div className="flex flex-col gap-7">
                {" "}
                <Text
                  size="text3xl"
                  as="p"
                  className="w-[68%] text-[25px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[21px] md:w-full"
                >
                  {" "}
                  EcoEasi is an AI-powered, low-cost platform that simplifies
                  ESG reporting and compliance for supply chains. EcoEasi offers
                  six CSRD-compliant products catering to two key supply chain
                  groups:{" "}
                </Text>{" "}
                <div className="flex flex-col gap-6">
                  {" "}
                  <div className="flex items-start gap-4 md:flex-col">
                    {" "}
                    <Img
                      src="images/img_checkmark.svg"
                      alt="Checkmarkimageone"
                      className="h-[48px] w-[48px] md:w-full"
                    />{" "}
                    <Text
                      size="text3xl"
                      as="p"
                      className="w-[64%] self-center text-[25px] font-normal leading-[159.4%] text-gray-600 lg:w-[64%] lg:text-[21px] md:w-full"
                    >
                      {" "}
                      Supplier SMEs: EcoEasi provides VSMEs reports (including
                      all required modules & analysis), empowering them on their
                      sustainability journey.{" "}
                    </Text>{" "}
                  </div>{" "}
                  <div className="flex items-start gap-4 md:flex-col">
                    {" "}
                    <Img
                      src="images/img_checkmark.svg"
                      alt="Checkmarkimagetwo"
                      className="h-[48px] w-[48px] md:w-full"
                    />{" "}
                    <Text
                      size="text3xl"
                      as="p"
                      className="w-[64%] self-center text-[25px] font-normal leading-[159.4%] text-gray-600 lg:w-[64%] lg:text-[21px] md:w-full"
                    >
                      {" "}
                      Mid-sized companies: Gain efficient access and integration
                      of SME ESG data to meet their CSRD reporting requirements,
                      along with EcoEasi analyses, scoring, recommendations,
                      KPIs, and benchmarking.{" "}
                    </Text>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <Text
                size="text3xl"
                as="p"
                className="w-[68%] text-[25px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[21px] md:w-full"
              >
                {" "}
                <span className="text-gray-600">
                  {" "}
                  <>
                    {" "}
                    Our journey started with a simple idea: leverage AI to help
                    SMEs with ESG reporting. <br /> We quickly recognized the
                    symbiotic relationship between SMEs and their mid-sized
                    buyers. EcoEasi now addresses the needs of both, fostering a
                    more sustainable and transparent supply chain. <br /> <br />{" "}
                  </>{" "}
                </span>{" "}
                <span className="font-bold text-gray-900">
                  Who we are?
                </span>{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
