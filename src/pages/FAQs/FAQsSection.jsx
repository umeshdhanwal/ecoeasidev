import { Text, Img, Heading } from "../../components";
import React from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

const accordionData = [
  {
    questionHeader: "Are non-listed SMEs who are in the supply chain of mid-sized entities in scope of CSRD?",
    answer: "Most SMEs are not in scope. Even though listed SMEs are. Non-listed supply chain SMEs are not directly in scope of CSRD, however given they are in the supply chain of entities that are in scope, then they are indirectly exposed as these entities who are in scope need to report on their value chain."
  },
  {
    questionHeader: "Are all mid-sized entities in scope of CSRD?",
    answer: "It depends. While mid-sized subsidiaries of large multinationals and listed mid-sized companies are in scope (588 across Europe on Euronext alone), for other mid-sized companies it depends on the size criteria and/or their listing status to determine if they are in scope."
  },
  {
    questionHeader: "What is the pricing for EcoEasi products?",
    answer: "Mid-sized entities pay for their EcoEasi products, while all Micro SME responses and small to medium sized companies on the platform will be free and will continue to be free after year 1 on a recurring basis. Only those larger SMEs (or listed SMEs) who have a significant number of employees, turnover and balance sheet size will be charged for using EcoEasi."
  },
  {
    questionHeader: "Why are EcoEasi products free or affordable for most Supply Chain SMEs?",
    answer: "EcoEasi provides products which connect and help mid-sized entities comply with their CSRD requirements and manage SMEs in their supply chain who complete the VSME modules aligned to CSRD. EcoEasi derives its revenue from these mid-sized customers and not from supply chain SMEs."
  },
  {
    questionHeader: "Can I use the EcoEasi's data gathered and reports for CSRD reporting?",
    answer: "All EcoEasi's reports follow the CSRD rules set out for SMEs in the VSME reporting framework and while we are not an auditor or legal advisor we would anticipate these being acceptable and are obtaining a legal opinion to confirm."
  },
  {
    questionHeader: "Can I use the assessment in the Sustainability Report for ESG reporting?",
    answer: "The Sustainability Report Assessments carried out on value chain SMEs follow the CSRD rules set out in the VSME reporting framework and while EcoEasi is not a legal advisor or auditor, we would anticipate that it would be acceptable. We are obtaining a legal opinion to determine if the assessments can be used for reporting."
  },
  {
    questionHeader: "How long does it take to complete an EcoEasi module?",
    answer: "The EcoEasi modules equate to the VSME modules, and we expect that it will take up to an hour to complete an EcoEasi module. We will be able to share more accurate data as EcoEasi evolves."
  },
  {
    questionHeader: "Are SME responses secure?",
    answer: "All information that you share with EcoEasi is secure and safe. We will always ask if you wish to share data with anybody else, even if it is one of your suppliers. All data storage and responses are protected and in compliance with data protection regulations such as GDPR. EcoEasi will carry out regular security audits, enforce strict access controls, and encrypt data."
  }
];

export default function FAQsSection() {
  return (
    <>
      {/* f a qs section */}
      <div className="mt-10 flex flex-col items-center gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
        <div className="flex justify-center self-stretch py-2">
          <div className="container-xs mt-2.5 flex justify-center px-14 lg:px-5 md:px-5">
            <a href="FAQs" target="_blank" rel="noreferrer" className="lg:text-[48px] md:text-[48px]">
              <Heading size="heading4xl" as="h1" className="text-[75px] font-extrabold text-gray-900">
                FAQs
              </Heading>
            </a>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex items-start gap-[46px] rounded-[50px] bg-gray-50 px-[54px] py-[70px] lg:py-8 md:flex-col md:p-5 sm:p-4">
            <Heading
              as="h2"
              className="mt-2 w-[36%] text-[40px] font-extrabold leading-[123%] text-gray-900 lg:w-[36%] lg:text-[34px] md:w-full md:text-[34px] sm:text-[32px]"
            >
              Do you have any questions?
            </Heading>
            <Accordion
              preExpanded={[0]}
              className="mt-2 flex flex-1 flex-col gap-[70px] self-center md:w-full md:self-stretch"
            >
              {accordionData.map((d, i) => (
                <AccordionItem uuid={i} key={`Expandable List${i}`}>
                  <div className="flex flex-1 flex-col gap-6">
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="mt-5 flex flex-wrap items-center justify-between gap-[38px] md:flex-col">
                                <Text
                                  size="text4xl"
                                  as="p"
                                  className="w-[94%] text-[32px] font-normal italic leading-[123%] text-gray-900 lg:w-[94%] lg:text-[27px] md:w-full md:text-[26px] sm:text-[24px]"
                                >
                                  {d.questionHeader}
                                </Text>
                                {props?.expanded ? (
                                  <Img
                                    src="images/img_arrow_down.svg"
                                    alt="Dropdown Icon"
                                    className="h-[18px] w-[18px] md:w-full"
                                  />
                                ) : (
                                  <Img
                                    src="images/img_arrow_down.svg"
                                    alt="Collapse Icon"
                                    className="mr-[18px] h-[18px] w-[18px] md:mr-0 md:w-full"
                                  />
                                )}
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="flex">
                        <Text
                          as="p"
                          className="w-[90%] text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]"
                        >
                          {d.answer}
                        </Text>
                      </div>
                    </AccordionItemPanel>
                  </div>
                  <div className="h-[0.5px] w-full rotate-[0deg] bg-gray-800" />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
