import { Text, Heading, Img } from "../../components";
import React from "react";
export default function AboutUsSection1() {
  return (
    <>
      {" "}
      {/* about us section */}{" "}
      <div className="self-stretch">
        {" "}
        <div className="flex justify-center bg-gray-50 py-[42px] md:py-5 sm:py-4">
          {" "}
          <div className="container-xs flex items-center justify-between gap-5 lg:px-5 md:flex-col md:px-5">
            {" "}
            <Img
              src="images/img_picture_14.png"
              alt="Profile Image"
              className="h-[296px] w-[296px] rounded-[148px] object-cover md:w-full"
            />{" "}
            <div className="flex w-[74%] flex-col items-start justify-center gap-[22px] md:w-full">
              {" "}
              <Heading
                size="headingxl"
                as="h2"
                className="text-[36px] font-bold text-gray-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
              >
                {" "}
                Muiris O’Dwyer{" "}
              </Heading>{" "}
              <Text
                size="text3xl"
                as="p"
                className="w-full text-[25px] font-normal leading-[159.4%] text-gray-600 lg:text-[21px]"
              >
                {" "}
                <>
                  {" "}
                  Muiris O’Dwyer is a co-founder of EcoEasi and is a believer in
                  accelerating the democratisation of ESG reporting using AI
                  technology. <br /> <br /> Muiris has over 25 years financial
                  services and regulatory experience most recently as Chief
                  Revenue Officer at Mercer Analytics, Research and Tools and
                  has held senior roles (COO, interim CEO, Board Director) while
                  at Wells Fargo Bank International, Royal Bank Scotland Finance
                  Ireland and has held multiple regulated positions. Also,
                  Muiris has consulted on ESG reporting for Irish domiciled
                  investment funds. <br /> <br /> Muiris is a Certified Bank
                  Director, holds MSc. in Investment, Treasury and Banking, a
                  Bachelor of Business & Legal Studies degree and the CFA
                  Certificate in ESG investing and has multiple other
                  qualifications.{" "}
                </>{" "}
              </Text>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
