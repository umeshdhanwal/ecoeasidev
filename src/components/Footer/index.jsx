import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer id="footer" {...props} className={`${props.className} flex flex-col`}>
      <div className="container-xs mb-10 lg:px-5 md:px-5">
        <div className="h-px bg-gray-300_02" />
        <div className="mt-[146px] flex items-start gap-[58px] md:flex-col">
          <div className="mt-1 flex w-[26%] flex-col gap-9 md:mt-0 md:w-full">
            <div className="flex flex-col gap-[26px]">
              <Img src="images/img_ecoeasi_logo_2.png" alt="Footer Logo" className="h-[45px] w-[166px] object-contain" />
              <Text as="p" className="text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                Low cost Supply Chain ESG Reporting Platform.
              </Text>
            </div>
          </div>
          <div className="flex w-[48%] flex-col self-center md:w-full">
            <div className="flex w-[60%] flex-wrap justify-between gap-5 lg:w-full md:w-full">
              <Heading
                size="headinglg"
                as="h3"
                className="text-[30px] font-bold capitalize text-gray-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                EcoEasi
              </Heading>
              <Heading
                size="headinglg"
                as="h3"
                className="text-[30px] font-bold capitalize text-gray-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
              >
                Resources
              </Heading>
            </div>
            <div className="mt-[26px] flex w-[66%] justify-between gap-5 lg:w-full md:w-full">
              <div className="h-px w-[42%] bg-gray-300_02" />
              <div className="h-px w-[42%] bg-gray-300_02" />
            </div>
            <div className="mt-3 flex items-start justify-between gap-5 md:flex-col">
              <ul className="flex w-[38%] flex-col items-start gap-11 md:w-full">
                <li>
                  <a href="Home" target="_blank" rel="noreferrer" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      About Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Products" target="_blank" rel="noreferrer" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Products
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="FAQs" target="_blank" rel="noreferrer" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      FAQs
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="Pricing" target="_blank" rel="noreferrer" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Pricing
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Contact Us
                    </Text>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start gap-11 self-center">
                <li>
                  <a href="Blog" target="_blank" rel="noreferrer" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Blog
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Company News
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Background Information
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Buyer Terms & Conditions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Supplier Terms & Conditions
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="lg:text-[18px]">
                    <Text as="p" className="text-[22px] font-normal capitalize text-gray-600">
                      Privacy
                    </Text>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Img src="images/img_lock.svg" alt="Footer Lock Icon" className="h-[22px] w-[22px] self-end" />
                  <Text as="p" className="text-[22px] font-normal text-gray-600 lg:text-[18px]">
                    info@ecoeasi.com
                  </Text>
                </li>
                <li className="flex items-center gap-4">
                  <Img src="images/img_phone_call.svg" alt="Footer Phone Icon" className="h-[22px] w-[22px] self-end" />
                  <Text as="p" className="text-[22px] font-normal text-gray-600 lg:text-[18px]">
                    +353 1 584 4731
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex flex-col items-start gap-[34px]">
          <div className="h-px self-stretch bg-gray-300_02" />
          <Text as="p" className="text-[22px] font-normal text-gray-600 lg:text-[18px]">
            Copyright © Idiro Analytics | Designed by Idiro Analytics{" "}
          </Text>
        </div>
      </div>
    </footer>
  );
}
