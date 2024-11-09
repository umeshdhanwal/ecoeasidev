import { Heading, Text, Button } from "../../components";
import React from "react";
import { Link } from 'react-router-dom';  // Add this import
import { useNavigate } from 'react-router-dom';

export default function HomepageaColumnFour() {
  const navigate = useNavigate();
  
  return (
    <div className="mt-[214px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col items-center gap-5 lg:px-5 md:px-5">
        <Heading
          size="heading3xl"
          as="h1"
          className="text-[50px] font-extrabold text-gray-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
        >
          Most popular articles
        </Heading>
        <div className="flex flex-col gap-[46px] self-stretch rounded-[50px] bg-gray-50 p-10 sm:p-4">
          <div className="flex h-[338px] items-end rounded-[40px] bg-[url(/public/images/img_image_338x1318.png)] bg-cover bg-no-repeat px-10 py-5 lg:h-auto md:h-auto sm:px-4">
            <Button
              size="sm"
              className="mt-[242px] min-w-[152px] rounded-[26px] px-[34px] font-bold capitalize sm:px-4"
            >
              Analysis
            </Button>
          </div>
          <div className="mb-1.5 flex flex-col gap-3">
            <div className="flex flex-col items-start gap-[18px]">
              <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px]">
                November 15, 2024
              </Text>
              <Heading
                as="h1"
                className="w-full text-[40px] font-extrabold leading-[123%] text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
              >
                What challenges does the VSME standard under the CSRD present for supply chain SMEs?
              </Heading>
            </div>
            <div className="flex flex-col items-start gap-[38px]">
              <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                The Voluntary SME Reporting Standard (VSME*) aims to provide a proportionate and simple reporting
                framework under CSRD which facilitates supply chain SMEs in disclosing their relevant ESG information
                while showcasing their ESG credentials.
              </Text>
              <a
                onClick={() => {
                  navigate('/blogpost');
                  window.scrollTo(0, 0);
                }}
                className="mb-1 lg:text-[15px] cursor-pointer"
              >
                <Heading size="headingxs" as="h6" className="text-[18px] font-bold text-deep_purple-a400 underline">
                  Read More
                </Heading>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
