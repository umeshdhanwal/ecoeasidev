import { Input, Text, Heading } from "../../components";
import SupportOptions from "../../components/SupportOptions";
import React, { Suspense } from "react";

const supportOptionsList = [
  { callSupportText: "Call support for the Pro Package", manualText: "Manual", automatedText: "Automated" },
  { callSupportText: "% SME ESG Data Collection Rate", manualText: "<30-40%", automatedText: "<90%" },
  { callSupportText: "Cost", manualText: ">€50,000", automatedText: "On Request" },
];

export default function HomepageaMainsection() {
  return (
    <>
      {/* homepage a  main section */}
      <div className="mt-[138px] flex flex-col items-center gap-5 self-stretch">
        <div className="container-xs lg:px-5 md:px-5">
          <div>
            <div className="ml-2.5 mr-[58px] md:mx-0">
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between">
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="w-[60%] mt-1 text-[30px] font-bold text-black-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                  >
                    Platform / Regulatory Analysis
                  </Heading>
                  <div className="flex w-[40%] justify-between">
                    <div className="w-[48%] flex flex-col items-end">
                      <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-500 lg:text-[15px] md:text-[14px] sm:text-[13px] text-right">
                        Without EcoEasi
                      </Text>
                      <Heading
                        size="headinglg"
                        as="h5"
                        className="text-right text-[30px] font-bold leading-[120%] text-black-900 lg:text-[25px] md:text-[22px] sm:text-[20px]"
                      >
                        <>
                          High Cost <br />& Poor Results
                        </>
                      </Heading>
                    </div>
                    <div className="w-[48%] flex flex-col items-end">
                      <Text size="textmd" as="p" className="text-[18px] font-normal text-deep_purple-a400 lg:text-[15px] md:text-[14px] sm:text-[13px] text-right">
                        With EcoEasi
                      </Text>
                      <Heading
                        size="headinglg"
                        as="h6"
                        className="text-right text-[30px] font-bold leading-[120%] !text-deep_purple-a400 lg:text-[25px] md:text-[22px] sm:text-[20px]"
                      >
                        <>
                          Lower Cost & Better <br />
                          Response Rate{" "}
                        </>
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-8px] flex flex-col gap-2">
              <div className="flex px-2.5">
                <Heading size="headings" as="h5" className="text-[20px] font-bold text-deep_purple-a400 lg:text-[17px]">
                  SMEs & Mid-Sized Buyers
                </Heading>
              </div>
              <div className="flex flex-col gap-2.5 bg-white-a700 p-3">
                <div className="flex justify-between rounded-[5px] bg-gray-50_01 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                  ESG Assessments & supply chain Report{" "}
                  </Text>
                  <div className="flex justify-between w-[40%]">
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                      Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-white-a700 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    Supplier Data & KPI Analysis report, recommendations and target setting{" "}
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-gray-50_01 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    Partner Module/All Modules
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-white-a700 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    Data collection and storage
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-gray-50_01 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    AI support{" "}
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <span className="font-bold text-deep_purple-a400">SMEs</span>
                <div className="flex justify-between rounded-[5px] bg-gray-50_01 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    Reporting framework Basic Module/PAT Module/Business{" "}
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-white-a700 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                  Double Materiality Assessment (if applicable) & VSME Report
                  </Text>
                  <div className="flex justify-between w-[40%]">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0">
                  Manual{" "}
                    </Text>
                    <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right">
                      Automated
                    </Text>
                  </div>
                </div>
                <div className="flex justify-between rounded-[5px] bg-gray-50_01 p-2.5">
                  <Text size="textmd" as="p" className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[60%]">
                    Cost
                  </Text>
                  <div className="flex justify-between w-[40%]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[18px] font-normal text-gray-600 lg:text-[15px] w-[48%] text-right pr-40 md:pr-0"
                    >
                      &gt;€10,000{" "}
                    </Text>
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[18px] font-normal !text-deep_purple-a400 lg:text-[15px] w-[48%] text-right"
                    >
                      Free/Low Cost
                    </Text>
                  </div>
                </div>
                <span className="font-bold text-deep_purple-a400">Mid-Sized buyers</span>
                <div className="flex flex-col gap-2.5">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {supportOptionsList.map((d, index) => (
                      <SupportOptions
                        {...d}
                        key={"listcallsupport" + index}
                        className={`bg-gray-50_01 flex justify-between ${index === 0 ? 'manual-align' : ''}`}
                      />
                    ))}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
