import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BackgroundInformationSection from "./BackgroundInformationSection";
import ContactUsSection from "./ContactUsSection";
import React from "react";

export default function BackgroundInformationPagePage() {
  return (
    <>
      <Helmet>
        <title>Understanding ESG Disclosure Impact on Supply Chains | EcoEasi</title>
        <meta
          name="description"
          content="Explore the trickle-down effect of voluntary ESG disclosure on SMEs within the supply chain. Learn how EcoEasi's AI-assisted platform simplifies sustainability reporting."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex flex-col gap-10">
          <Header />
          <div className="flex flex-col items-center gap-2">
            <div className="container-xs mt-4 flex flex-col items-center px-14 lg:px-5 md:px-5">
              <Heading
                size="heading4xl"
                as="h1"
                className="text-[75px] font-extrabold text-gray-900 lg:text-[48px] md:text-[48px]"
              >
                Background Information Page
              </Heading>
            </div>
            <div className="flex flex-col gap-[50px] self-stretch py-20 lg:py-8 md:py-5 sm:py-4">
              {/* background information section */}
              <BackgroundInformationSection />

              {/* contact us section */}
              <ContactUsSection />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
