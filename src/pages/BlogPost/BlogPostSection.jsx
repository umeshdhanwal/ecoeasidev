import { Heading, Text } from "../../components";
import React, { Suspense } from "react";

const blogPostGrid = [
  { challengeNumber: "01." },
  {
    challengeNumber:
      "Limited Resources and Expertise: Many SMEs, especially smaller ones, lack the resources and expertise to effectively collect, analyse, and report ESG data. The introduction of the VSME helps standardise what is required and makes it easier to quantify what is the gap however the challenge of limited ESG Resources and ESG Expertise for SMEs remain. The EcoEasi Suitability Report represents a low cost viable alternative.",
  },
  { challengeNumber: "02." },
  {
    challengeNumber:
      "Data Collection and Reporting Burden: Even with a simplified standard like the VSME ED, gathering and reporting sustainability data can still be time-consuming and resource- intensive for SMEs. This burden can be particularly challenging for supply chain SMEs that may need to collect data from multiple suppliers and partners. EcoEasi combine your data and AI to do this at low cost.",
  },
  { challengeNumber: "03." },
  {
    challengeNumber: (
      <>
        Understanding Materiality: Determining which ESG issues are material can be complex for supply chain SMEs. The
        VSME provides guidance on materiality assessment, but SMEs will still require external expertise or support to
        do it themselves and given the cost implications these are not real choices for SMEs. The EcoEasi Sustainability
        Report product can do this
        <br />
        for you.
      </>
    ),
  },
  { challengeNumber: "04." },
  {
    challengeNumber: (
      <>
        Alignment with Customer Requirements: While the consequence of the VSME, Sustainability Reports following CSRD
        rules becoming the new market standard in the EU. However, this has yet to become the EU market normality. Now
        different customers may have varying ESG reporting requirements (not least if they come from outside of the EU)
        and expectations which can result in them still issuing questionnaires. This can create challenges for supply
        chain SMEs who need to tailor their reporting to meet the specific needs of each customer via the issued
        questionnaires. EcoEasi products consist of a CDP questionnaire
        <br />
        solution and a Sustainability Report that follows CSRD rules.
      </>
    ),
  },
  { challengeNumber: "05." },
  {
    challengeNumber: (
      <>
        Costs: Implementing the VSME will involve additional costs related to data collection and
        <br />
        materiality assessment such as ESG reporting software, and/or potential external
        <br />
        consultancy. As discussed earlier, the reality is that these options are too expensive for
        <br />
        supply chain SMEs with limited budgets. EcoEasi products are a low-cost alternative.
      </>
    ),
  },
  { challengeNumber: "06." },
  {
    challengeNumber: (
      <>
        Lack of Awareness and Understanding: Many supply chain SMEs may not be fully aware of
        <br />
        the VSME or its implications for their business. This lack of awareness can lead to delays in
        <br />
        implementation or non-compliance with customer requirements.
      </>
    ),
  },
  { challengeNumber: "07." },
  {
    challengeNumber:
      "Integration with Existing Systems: Integrating sustainability reporting with existing business processes and systems will be a challenge for SMEs, particularly if they must integrate expensive ESG reporting software. This requires careful planning and coordination to ensure a smooth and efficient process. This integration can represent additional costs. EcoEasi products do not require integration with existing systems.",
  },
  { challengeNumber: "08." },
  {
    challengeNumber: (
      <>
        Evolving Regulatory Landscape: The sustainability reporting landscape is constantly evolving, with new
        regulations and standards emerging regularly. This can create uncertainty and require SMEs to adapt their
        reporting practices continuously. EcoEasi will monitor and
        <br />
        update its products continually to reflect any changes.
      </>
    ),
  },
  { challengeNumber: "09." },
  {
    challengeNumber:
      "VSME Complexity: Despite the simplification, the VSME still is still perceived as complex for many supply chain SMEs. Supply Chain SMEs need to select an approach appropriate for them and if they are not a micro-SME, they will need to engage in a detailed materiality assessment and may have to gather their own information from their own supply chain. EcoEasi products do all of this for you",
  },
];

export default function BlogPostSection() {
  return (
    <>
      {/* blog post section */}
      <div className="mt-10">
        <div className="flex justify-center py-2">
          <div className="container-xs mt-2 flex justify-center px-14 lg:px-5 md:px-5">
            <div className="flex px-14 md:px-5 sm:px-4">
              <Heading
                size="heading4xl"
                as="h1"
                className="text-[75px] font-extrabold text-gray-900 lg:text-[48px] md:text-[48px]"
              >
                Blog Post
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 lg:py-8 md:py-5 sm:py-4">
          <div className="container-xs lg:px-5 md:px-5">
            <div className="flex flex-col items-center justify-end rounded-[50px] bg-gray-50 px-14 py-[66px] lg:py-8 md:p-5 sm:p-4">
              <div className="mt-[54px] flex w-[90%] flex-col items-start gap-[58px] lg:w-full md:w-full sm:gap-[29px]">
                <Heading
                  as="h2"
                  className="w-full text-[40px] font-extrabold leading-[123%] text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  What challenges does the voluntary sustainability reporting standard under the Corporate
                  Sustainability Reporting Directive (CSRD) present for supply chain SMEs?
                </Heading>
                <div className="flex flex-col items-start gap-5 self-stretch">
                  <Heading size="headingmd" as="h3" className="text-[22px] font-extrabold text-gray-900 lg:text-[18px]">
                    Overall
                  </Heading>
                  <div className="flex flex-col gap-[30px] self-stretch">
                    <Text as="p" className="text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                      The Voluntary SME Reporting Standard (VSME*) aims to provide a proportionate and simple reporting
                      framework under CSRD which facilitates supply chain SMEs** in disclosing their relevant ESG
                      information while showcasing their ESG credentials.
                    </Text>
                    <div className="ml-20 mr-[98px] md:mx-0">
                      <div className="flex items-start gap-4 md:flex-col">
                        <div className="mt-3 h-[10px] w-[10px] rotate-[-180deg] rounded-[5px] bg-gray-900" />
                        <Text
                          as="p"
                          className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                        >
                          The VSME aims to reduce the reporting burden on supply chain SMEs compared to the more
                          comprehensive CSRD designed for larger companies and effectively consolidate multiple requests
                          of supply chain SMEs into the production of one Sustainability Report.
                        </Text>
                      </div>
                      <div className="flex items-start gap-4 md:flex-col">
                        <div className="mt-3.5 h-[10px] w-[8px] rotate-[-180deg] rounded-[50%] bg-gray-900" />
                        <Text
                          as="p"
                          className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                        >
                          By offering a standardized set of metrics and disclosures, the VSME aims to improve the
                          transparency and comparability of sustainability information reported by supply chain SMEs.
                        </Text>
                      </div>
                      <div className="flex items-start gap-[18px] md:flex-col">
                        <div className="mt-3.5 h-[10px] w-[10px] rotate-[-180deg] rounded bg-gray-900" />
                        <Text
                          as="p"
                          className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                        >
                          Increasingly supply chain large customers of SMEs, banks &amp; investors demand ESG data from
                          supply chain SMEs.
                        </Text>
                      </div>
                      <div className="flex items-start gap-[22px] md:flex-col">
                        <div className="mt-3 h-[10px] w-[10px] rotate-[-180deg] rounded bg-gray-900" />
                        <Text
                          as="p"
                          className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                        >
                          While the VSME is voluntary, a supply chain SME is already indirectly within the scope of CSRD
                          as it is in the supply chain of large customers. If supply chain SMEs wants to keep large
                          customers, access favourable financing, address the competition for talent etc. then in
                          reality it must comply.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Heading
                  as="h4"
                  className="w-full text-[40px] font-extrabold leading-[123%] text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  EcoEasi represents a low-cost alternative for Supply Chain SMEs. While the VSME helps SMEs, there
                  remains significant challenges which EcoEasi addresses
                </Heading>
                <div className="flex flex-col items-start gap-[18px] self-stretch">
                  <Heading size="headingmd" as="h5" className="text-[22px] font-extrabold text-gray-900 lg:text-[18px]">
                    Challenges:
                  </Heading>
                  <div className="self-stretch">
                    <div className="mr-[186px] grid grid-cols-2 gap-6 gap-y-7 lg:grid-cols-2 md:mr-0 md:grid-cols-1">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {blogPostGrid.map((d, index) => (
                          <Text
                            key={"challengeGrid" + index}
                            as="p"
                            className="w-full text-[22px] font-normal text-gray-600 lg:text-[18px]"
                          >
                            {d.challengeNumber}
                          </Text>
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
                <Heading size="headingmd" as="h6" className="text-[22px] font-extrabold text-gray-900 lg:text-[18px]">
                  EcoEasi produces the Sustainability Report you require as a Supply Chain SME. Get a demo now .
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
