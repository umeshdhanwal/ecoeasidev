import { Helmet } from "react-helmet";
import { Slider, Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EcoEasiAISection from "./EcoEasiAISection";
import HomepageASection from "./HomepageASection";
import HomepageaColumnFour from "./HomepageaColumnFour";
import HomepageaMainsection from "./HomepageaMainsection";
import PhotoAndDescriptionSection from "./PhotoAndDescriptionSection";
import PricingOptionsSection from "./PricingOptionsSection";
import Group368Page from "../Group368";
import React from "react";
import { useNavigate } from 'react-router-dom';

export default function HomepageAPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Streamline ESG Reporting with EcoEasi&#39;s AI Platform</title>
        <meta
          name="description"
          content="Discover how EcoEasi's AI-driven ESG compliance platform aids SME suppliers with free, CSRD-aligned ESG assessments and reports, saving time and costs."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-2.5 bg-white-a700">
        <Header className="absolute left-0 right-0 top-0 m-auto w-full max-w-[1402px] z-10 lg:px-5 md:px-5" />
        <div className="relative h-[1042px] content-center lg:h-auto md:h-auto">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 } }}
            renderDotsItem={(props) => {
              return props?.isActive ? (
                <div className="mr-2 inline-block h-[16px] w-[16px] cursor-pointer rounded-[50%] bg-green-500_01" />
              ) : (
                <div className="mr-2 inline-block h-[16px] w-[16px] cursor-pointer rounded-[50%] bg-gray-300_02" />
              );
            }}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            disableButtonsControls
            className="w-full"
            items={[
              <Group368Page key="group368" />,
              <div key="homepage" className="flex h-[1042px] items-end bg-[url(/public/images/img_banner_1042x1920.png)] bg-cover bg-no-repeat p-12 lg:h-auto md:h-auto md:p-5 sm:p-4">
                <div className="mt-[212px] flex w-[94%] justify-center lg:w-full md:w-full">
                  <div className="mb-[76px] flex w-full justify-center">
                    <div className="container-xs flex justify-center lg:px-5 md:px-5">
                      <div className="flex w-full items-center md:flex-col">
                        <div className="flex flex-1 flex-col items-start gap-[34px] md:self-stretch">
                          <Heading
                            size="heading4xl"
                            as="h1"
                            className="w-[80%] text-[75px] font-extrabold leading-[110%] text-gray-900 lg:w-full lg:text-[48px] md:w-full md:text-[48px]"
                          >
                            Streamline your ESG Reporting to your buyers on EcoEasi for Free!
                          </Heading>
                          <Text
                            size="text3xl"
                            as="p"
                            className="w-[80%] text-[25px] font-normal leading-[157.4%] text-gray-600 lg:w-full lg:text-[21px] md:w-full"
                          >
                            Are you an SME supplier who want a free ESG Assessment & Report aligned with CSRD
                            which you can send to buyers? Then sign-up to the EcoEasi Supply Chain ESG
                            compliance platform.
                          </Text>
                          <Button
                            size="lg"
                            shape="round"
                            className="min-w-[246px] rounded-[34px] px-[34px] font-bold sm:px-4 
                             bg-white text-grey-a400 border border-deep_purple-a400
                             hover:bg-deep_purple-a400 hover:!text-white
                             transition-colors duration-300 flex flex-row items-center justify-center text-center 
                             cursor-pointer whitespace-nowrap h-[68px] text-[18px]"
                            onClick={() => navigate('/sustainabilityreportoption')}
                          >
                            SMEs Get Started
                          </Button>
                        </div>
                        <div className="flex w-[34%] flex-col gap-[34px] rounded-[40px] bg-white-a700 px-8 py-[86px] lg:py-8 md:w-full md:py-5 sm:p-4">
                          <div className="relative mx-3.5 h-[244px] md:mx-0">
                            <div className="absolute bottom-[18.73px] left-[21.90px] m-auto h-[176px] w-[70%] border-2 border-dashed border-gray-400_03" />
                            <Img
                              src="images/img_dashboard.svg"
                              alt="Dashboard Image"
                              className="absolute left-0 right-0 top-0 m-auto h-[202px] w-[68%] object-contain"
                            />
                            <div className="absolute bottom-[-0.59px] left-0 m-auto flex flex-col items-start justify-center rounded-[14px] bg-white-a700 px-4 py-3 shadow-xs">
                              <Text size="textxs" as="p" className="text-[7px] font-normal text-black-900">
                                Password
                              </Text>
                              <Text
                                size="texts"
                                as="p"
                                className="mt-1 rounded bg-gray-200 pl-2 pr-[34px] text-[10px] font-normal tracking-[3.30px] text-deep_purple-a400 sm:pr-4"
                              >
                                **********
                              </Text>
                              <Text size="textxs" as="p" className="mt-1 text-[7px] font-normal text-black-900">
                                Confirm Password
                              </Text>
                              <Text
                                size="texts"
                                as="p"
                                className="mt-1 rounded bg-gray-200 pl-2 pr-[34px] text-[10px] font-normal tracking-[3.30px] text-deep_purple-a400 sm:pr-4"
                              >
                                **********
                              </Text>
                              <Button size="xs" className="mt-2.5 min-w-[40px] rounded px-3 font-bold">
                                LogIn
                              </Button>
                            </div>
                            <Img
                              src="images/img_menu_bar.svg"
                              alt="Menu Bar Image"
                              className="absolute right-[1.23px] top-[28%] m-auto h-[32px] w-[58%] object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center gap-4">
                            <Heading
                              size="headinglg"
                              as="h2"
                              className="text-[30px] font-bold text-gray-900 lg:text-[25px] md:text-[24px] sm:text-[22px]"
                            >
                              Basic Modules
                            </Heading>
                            <Text
                              as="p"
                              className="self-stretch text-center text-[22px] font-normal leading-[157.4%] text-gray-600 lg:text-[18px]"
                            >
                              For all supplier & micro SMEs that are between 1 - 250 people, €350k - €40m in
                              balance sheet total and €700k -€40m in net turnover
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ]}
          />
        </div>
        <div className="mb-1 flex flex-col gap-[170px] py-10 lg:gap-[127px] md:gap-[127px] sm:gap-[85px] sm:py-4">
          <div className="mt-10 flex flex-col gap-[170px] lg:gap-[127px] md:gap-[127px] sm:gap-[85px]">
            <PhotoAndDescriptionSection />
            <EcoEasiAISection />
          </div>
          <div className="flex flex-col items-center">
            <HomepageASection />
            <HomepageaMainsection />
            <PricingOptionsSection />
            <HomepageaColumnFour />
            <div className="container-xs mt-[90px] lg:px-5 md:px-5">
              <div className="flex flex-col gap-[146px] lg:gap-[109px] md:gap-[109px] sm:gap-[73px]">
                <div className="h-px bg-gray-300_02" />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
