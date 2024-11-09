import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FAQsSection from "./FAQsSection";
import React from "react";

export default function FAQsPage() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - EcoEasi ESG Solutions</title>
        <meta
          name="description"
          content="Have questions about CSRD scope for SMEs or EcoEasi product pricing? Our FAQs provide answers to common queries on our affordable ESG reporting platform for Supply Chain SMEs. "
        />
      </Helmet>
      <div className="relative w-full bg-white-a700">
        <Img src="images/img_background_patterns.svg" alt="Background Image" className="mt-1.5 h-[808px] w-full" />
        <div className="absolute inset-0 flex flex-col">
          <Header className="absolute left-0 right-0 top-0 m-auto w-full max-w-[1402px] z-10 lg:px-5 md:px-5" />
          <div className="mt-[120px] flex-1">
            <FAQsSection />
            <Footer className="mt-[120px]" />
          </div>
        </div>
      </div>
    </>
  );
}
