import { Heading } from "../../components";
import ESGCompliancePlatform from "../../components/ESGCompliancePlatform";
import React, { Suspense } from "react";

const homepageFeaturesGrid = [
  {
    iconImage: "images/img_lock_white_a700.svg",
    titleText: (
      <>
        AI-driven ESG Compliance <br />
        Platform
      </>
    ),
    descriptionText:
      "The EcoEasi Supply Chain ESG compliance platform saves huge amount of time & money for buyers suppler SMEs while increasing the supplier response rate and level of data analysis by combining ESG knowledge and AI for Buyers while supporting SMEs on their sustainability journey.",
  },
  {
    iconImage: "images/img_laptop.svg",
    titleText: "Your ESG One-Stop Shop",
    descriptionText:
      "EcoEasi products will offer SMEs the ability to add to their suite of documents, e.g. an ESG assessment risk policy incorporating your material risk while supporting your double material risk assessment.",
  },
  {
    iconImage: "images/img_play.svg",
    titleText: "Enrich your EcoEasi product",
    descriptionText: "All EcoEasi’s AI products seamlessly combine easily all ESG info obtained from SME suppliers.",
  },
  {
    iconImage: "images/img_megaphone.svg",
    titleText: (
      <>
        Supply Chain Regulatory <br />
        Changes
      </>
    ),
    descriptionText:
      "EcoEasi provides business partner’s with products to address CSRD and is always updating its products for any regulatory changes.",
  },
  {
    iconImage: "images/img_play.svg",
    titleText: "Seamlessly Compatible",
    descriptionText:
      "EcoEasi’s products are machine readable and compatible with both the reporting software and can combine directly with your feeds.",
  },
  {
    iconImage: "images/img_megaphone.svg",
    titleText: "Renewals & Payments",
    descriptionText:
      "Free sign-up or otherwise for Supplier SMEs for the first year. Continues at the same price unless terminated before the automatic annual renewal.",
  },
];

export default function HomepageASection() {
  return (
    <>
      {/* homepage a section */}
      <div className="flex flex-col items-center gap-[52px] self-stretch sm:gap-[26px]">
        <div className="flex justify-center self-stretch">
          <div className="container-xs flex justify-center px-14 lg:px-5 md:px-5">
            <Heading
              size="heading3xl"
              as="h2"
              className="flex-1 text-center text-[50px] font-extrabold leading-[110%] text-gray-900 lg:text-[42px] md:text-[34px] sm:text-[28px]"
            >
              Unlocking the Benefits of EcoEasi Products and Platform for SME Suppliers and Mid-Sized Buyers{" "}
            </Heading>
          </div>
        </div>
        <div className="container-xs lg:px-5 md:px-5">
          <div className="grid grid-cols-2 justify-center gap-[50px] lg:grid-cols-2 md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {homepageFeaturesGrid.map((d, index) => (
                <ESGCompliancePlatform {...d} key={"homepageGrid" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
