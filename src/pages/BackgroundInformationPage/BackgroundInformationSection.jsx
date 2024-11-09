import { Text, Heading } from "../../components";
import React from "react";

export default function BackgroundInformationSection() {
  return (
    <>
      {/* background information section */}
      <div className="flex flex-col items-center">
        <div className="container-xs lg:px-5 md:px-5">
          <div className="flex flex-col items-center justify-center rounded-[50px] bg-gray-50 px-14 py-[120px] lg:py-8 md:p-5 sm:p-4">
            <div className="flex w-[90%] flex-col items-center gap-[54px] lg:w-full md:w-full sm:gap-[27px]">
              <div className="flex flex-col gap-6 self-stretch">
                <Heading
                  as="h2"
                  className="text-[40px] font-extrabold leading-[123%] text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  Voluntary ESG Disclosure and &quot;Trickle Down&quot; Impact on the supply chains
                </Heading>
                <div className="flex flex-col gap-[30px]">
                  <Text as="p" className="text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                    <>
                      CSRD’s predecessor required only the largest and/or publicly listed companies to disclose their
                      non-financial information. SMEs are not directly in scope but if they are in the supply chain of
                      entities who are and they want to meet their customer expectations this means they are indirectly
                      in scope.
                      <br />
                      <br />
                      To date questionnaires have been sent but now following the introduction of the draft VSME, a
                      standardized report can be asked for from supplier SMEs.
                    </>
                  </Text>
                  <div className="ml-20 mr-[98px] md:mx-0">
                    <div className="flex items-start gap-4 md:flex-col">
                      <div className="mt-3 h-[10px] w-[10px] rotate-[-180deg] rounded-[5px] bg-gray-900" />
                      <Text
                        as="p"
                        className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                      >
                        The VSME simplifies & standardizes multiple requests from mid-sized customers for SME’s ESG data
                        into one proportionate Sustainability Report based on prescribed modules.
                      </Text>
                    </div>
                    <div className="mr-4 flex items-center justify-center gap-4 md:mr-0 md:flex-col">
                      <div className="mb-2.5 h-[10px] w-[8px] rotate-[-180deg] self-end rounded-[50%] bg-gray-900 md:self-auto" />
                      <Text as="p" className="text-[22px] font-normal text-gray-600 lg:text-[18px]">
                        EcoEasi uses an AI assisted questionnaires to generate the Sustainability Reports in its
                        products.{" "}
                      </Text>
                    </div>
                    <div className="mt-5 flex items-start gap-[18px] md:flex-col">
                      <div className="mt-3.5 h-[10px] w-[10px] rotate-[-180deg] rounded bg-gray-900" />
                      <Text
                        as="p"
                        className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                      >
                        EcoEasi provides both supply chain SMEs and mid-sized customers with the right products and its
                        platform and connects them.
                      </Text>
                    </div>
                    <div className="flex items-start gap-[22px] md:flex-col">
                      <div className="mt-3 h-[10px] w-[10px] rotate-[-180deg] rounded bg-gray-900" />
                      <Text
                        as="p"
                        className="w-full self-center text-[22px] font-normal leading-[160%] text-gray-600 lg:text-[18px]"
                      >
                        Under the VSME, SMEs with fewer than 10 employees can select Option A: the Basic Module only as
                        the basis for their Sustainability Report, details as to the more complex modules are provided
                        below.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-11 self-stretch">
                <div className="flex flex-col items-start gap-4">
                  <Heading
                    as="h3"
                    className="text-[40px] font-extrabold text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                  >
                    Materiality Risk Analysis for Bigger SMEs
                  </Heading>
                  <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                    Bigger SMEs need to complete a materiality risk analysis to determine which risks are relevant to
                    the business before answering the questions in the Narrative - Policies, Actions, and Tasks (PAT)
                    (appropriate for an SME that already has PAT in place) and/or the Business Partner Module (BP -
                    looks for additional data beyond what is already gathered by the BM) to complete a sustainability
                    report.
                  </Text>
                </div>
                <div className="mx-20 mb-2.5 flex flex-col gap-6 md:mx-0">
                  <div className="flex items-center gap-[30px]">
                    <div className="h-[10px] w-[10px] rotate-[-180deg] rounded-[5px] bg-gray-900" />
                    <Text as="p" className="text-[22px] font-normal text-gray-600 lg:text-[18px]">
                      Option B: BM + PAT
                    </Text>
                  </div>
                  <div className="flex items-start gap-[30px]">
                    <div className="mt-2.5 h-[10px] w-[10px] rotate-[-180deg] rounded-[5px] bg-gray-900" />
                    <Text as="p" className="self-center text-[22px] font-normal text-gray-600 lg:text-[18px]">
                      Option C: BM + BP
                    </Text>
                  </div>
                  <div className="flex items-start gap-[30px]">
                    <div className="mt-2.5 h-[10px] w-[10px] rotate-[-180deg] rounded-[5px] bg-gray-900" />
                    <Text as="p" className="self-center text-[22px] font-normal text-gray-600 lg:text-[18px]">
                      Option D: BM + PAT + BP
                    </Text>
                  </div>
                </div>
              </div>
              <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                The mid-sized entities can select what is right for them as the basis for the ESG Assessment & Report
                they collect from their supply chain SMEs.
              </Text>
              <div className="ml-20 mr-[106px] flex flex-col gap-5 self-stretch md:mx-0">
                <div className="flex items-center gap-[30px] md:flex-col">
                  <div className="h-[10px] w-[8px] rotate-[-180deg] rounded-[50%] bg-gray-900" />
                  <Text as="p" className="w-full text-[22px] font-normal leading-[150%] text-gray-600 lg:text-[18px]">
                    EcoEasi provides SMEs with the ability to provide an ESG Assessment & Report to buyers for Free.
                  </Text>
                </div>
                <div className="flex items-center gap-[30px] md:flex-col">
                  <div className="h-[10px] w-[8px] rotate-[-180deg] rounded-[50%] bg-gray-900" />
                  <Text as="p" className="w-full text-[22px] font-normal leading-[150%] text-gray-600 lg:text-[18px]">
                    EcoEasi is a low cost Supply Chain ESG Reporting Platform that connects mid-sized buyers with Supply
                    Chain SMEs.
                  </Text>
                </div>
                <div className="flex items-start gap-[30px] md:flex-col">
                  <div className="mt-6 h-[10px] w-[8px] rotate-[-180deg] rounded-[50%] bg-gray-900" />
                  <Text
                    as="p"
                    className="w-full self-center text-[22px] font-normal leading-[150%] text-gray-600 lg:text-[18px]"
                  >
                    EcoEasi provides the right products to supply chain SMEs and mid-sized buyers who are in the scope
                    of CSRD and connects them.{" "}
                  </Text>
                </div>
              </div>
              <Heading
                as="h4"
                className="self-start text-[40px] font-extrabold text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
              >
                The European Sustainability Reporting Standards
              </Heading>
              <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                The European Sustainability Reporting Standards (ESRS) provide detailed instructions for companies or
                buyers covered by the Corporate Sustainability Reporting Directive (CSRD). These standards, created by
                the European Financial Reporting Advisory Group (EFRAG), outline the specific information and format
                that companies must use in their sustainability reports. The goal of the ESRS is to make sure that
                sustainability reporting is standardized, making the information reported by different companies useful,
                comparable, trustworthy, and easily accessible.
              </Text>
              <Heading
                as="h5"
                className="self-start text-[40px] font-extrabold text-gray-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
              >
                Reasonable Efforts
              </Heading>
              <Text as="p" className="w-full text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]">
                the FAQs issued by the EC in August 2024 suggest that &quot;reasonable efforts&quot; by those companies
                in the scope of CSRD do not imply an absolute obligation to obtain complete ESG data from every
                supplier. Rather, it&#39;s about demonstrating a proactive and diligent approach to supply chain due
                diligence, taking into account practical constraints and prioritizing efforts based on materiality.
                EcoEasi provides evidence of this progressive approach.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
