import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import AboutUsSection1 from "./AboutUsSection1";
import AboutUsSection2 from "./AboutUsSection2";
import React from "react";

export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>About EcoEasi - AI-Powered ESG Reporting for Supply Chains</title>
        <meta
          name="description"
          content="Learn about EcoEasi's mission to democratize ESG reporting with AI technology. Meet our team of experts and discover how we empower SMEs and mid-sized companies in their sustainability journey."
        />
      </Helmet>
      <div className="relative w-full bg-white-a700">
        <Img
          src="images/img_background_patterns.svg"
          alt="Background Image"
          className="h-[808px] w-full lg:h-auto md:h-auto"
        />
        <div className="absolute inset-0 flex flex-col">
          <Header className="absolute left-0 right-0 top-0 m-auto w-full max-w-[1402px] z-10 lg:px-5 md:px-5" />
          <div className="mt-[120px] flex-1">
            <div className="flex flex-col gap-14 sm:gap-7">
              <AboutUsSection />
              <div className="flex flex-col items-center gap-[72px] py-9 lg:gap-[72px] md:gap-[54px] sm:gap-9 sm:py-4">
                <AboutUsSection1 />
                <div className="container-xs lg:px-5 md:px-5">
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    <Img
                      src="images/img_picture_14_296x296.png"
                      alt="Profile Image"
                      className="h-[296px] w-[296px] rounded-[148px] object-cover md:w-full"
                    />
                    <div className="flex w-[74%] flex-col items-start justify-center gap-[22px] self-center md:w-full">
                      <Heading
                        size="headingxl"
                        as="h3"
                        className="text-[36px] font-bold text-gray-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                      >
                        Aidan Connolly
                      </Heading>
                      <Text
                        size="text3xl"
                        as="p"
                        className="w-full text-[25px] font-normal leading-[159.4%] text-gray-600 lg:text-[21px]"
                      >
                        <>
                          Aidan Connolly is co-founder of EcoEasi and a passionate believer in the ability of technology
                          to contribute to a better, fairer and more sustainable economy. He has spent over 20 years as
                          the CEO of Idiro Analytics, a pioneering company that develops and deploys AI and ML
                          technologies across the world. Aidan is also a member of Ireland’s National Centre for Applied
                          AI (CeADAR) Industry Steering Board. Since March 2024, Aidan has also been chairman of the
                          Technology Ireland AI Industry forum.
                          <br />
                          <br />
                          From the beginning of Aidan's career in the early 1990s, he has worked in the field of data
                          and analytics, first in Brussels in the Research and New Technologies division of the European
                          Commission (DG12) and later in Vodafone Ireland before going on to establish Idiro Analytics
                          in 2003.
                          <br />
                          <br />
                          In 2020, Aidan was awarded the Analytics Leader of the Year by the Analytics Institute of
                          Ireland, and Idiro Analytics was recognized as the Analytics SME of the Year.
                          <br />
                          <br />
                          In 2021, Idiro launched the AI Ethics Centre to help further the development of standards that
                          can be used by industry and government.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="mb-[42px] flex flex-col gap-[66px] self-stretch sm:gap-[33px]">
                  <div className="flex justify-center bg-gray-50 py-[52px] md:py-5 sm:py-4">
                    <div className="container-xs flex justify-center lg:px-5 md:px-5">
                      <div className="flex w-full items-start justify-between gap-5 md:flex-col">
                        <Img
                          src="images/img_picture_14_1.png"
                          alt="Profile Image"
                          className="h-[296px] w-[296px] rounded-[148px] object-cover md:w-full"
                        />
                        <div className="flex w-[74%] flex-col items-start gap-6 self-center md:w-full">
                          <Heading
                            size="headingxl"
                            as="h4"
                            className="text-[36px] font-bold text-gray-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                          >
                            Umesh Kumar
                          </Heading>
                          <Text
                            size="text3xl"
                            as="p"
                            className="w-full text-[25px] font-normal leading-[159.4%] text-gray-600 lg:text-[21px]"
                          >
                            <>
                              Umesh Kumar is EcoEasi’s Chief AI Officer and is an ardent believer in AI technology
                              for transforming ESG reporting and analytics.
                              <br />
                              <br />
                              Umesh has over 15 years of experience in financial services and most recently as Vice
                              President, AI at a leading bank in UAE and Singapore. He has held senior roles leading
                              analytics teams at Citi Bank and East Spring Investments, to name a few. Also, Umesh is
                              passionate about Generative AI and Machine Learning and has hands-on experience in building,
                              leading, and implementing end-to-end analytics projects.
                              <br />
                              <br />
                              Umesh holds an MSc in Data Science from NUS, Singapore, an MBA from the Indian Institute of
                              Foreign Trade, India, and a Bachelor of Commerce degree from Shri Ram College of Commerce.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* About Us Section 2 */}
                  <AboutUsSection2 />
                </div>
              </div>
            </div>
            <Footer className="mt-[120px]" />
          </div>
        </div>
      </div>
    </>
  );
}
