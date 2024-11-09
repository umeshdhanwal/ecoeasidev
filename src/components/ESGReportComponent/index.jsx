import { Button, Text, Heading } from "./..";
import React from "react";

export default function ESGReportComponent({
  headingText = (
    <>
      Standard ESG Assessments <br />& Reports
    </>
  ),
  subheadingText = "For Mid-Sized buyers who want to obtain and analyse ESG reportable data from their SME suppliers.",
  priceText = "€5950 per year",
  billingText = "€496 Billed per month",
  descriptionText,
  buttonText = "Get Started",
  isPro = false,
  ...props
}) {
  const proContent = {
    headingText: (
      <>
        Pro ESG Assessments <br />& Reports
      </>
    ),
    priceText: "€8950 per year",
    billingText: "€746 Billed per month",
  };

  const content = isPro ? proContent : { headingText, priceText, billingText };

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-[50%] md:w-full gap-8 px-[18px] py-11 md:py-5 sm:py-4 border-deep_purple-a400 border-2 border-solid bg-gray-50 rounded-[30px]`}
    >
      <div className="mx-2.5 flex flex-col gap-[34px] self-stretch">
        <Heading
          size="headingxl"
          as="h1"
          className="text-center text-[36px] font-extrabold leading-[110%] text-gray-900"
        >
          {content.headingText}
        </Heading>
        <Text size="text2xl" as="p" className="text-center text-[24px] font-normal leading-10 text-gray-900">
          {subheadingText}
        </Text>
      </div>
      <div className="flex flex-col gap-3 self-stretch">
        <div className="h-px bg-blue_gray-100" />
        <div className="flex flex-col items-center">
          <Heading as="h1" className="text-[40px] font-extrabold text-gray-900">
            <span>{content.priceText}</span>
            <span className="text-[20px]">&nbsp;/ year</span>
          </Heading>
          <div className="mx-[42px] mt-3 flex justify-center self-stretch rounded-[20px] bg-yellow-100 p-1.5">
            <Heading size="headings" as="h5" className="text-[20px] font-semibold text-lime-800">
              {content.billingText}
            </Heading>
          </div>
          <div className="mt-[22px] h-px w-full self-stretch bg-blue_gray-100" />
        </div>
      </div>
      <Text
        size="textlg"
        as="p"
        className="self-stretch text-center text-[20px] font-normal leading-[27px] text-gray-600"
      >
        {isPro ? (
          <>
            Ability to select questionnaires which generate ESG Assessments & Reports
            <br /><br />
            Invitations can be sent by EcoEasi to <span className="font-bold text-deep_purple-a400">unlimited supply chain SMEs</span>
            <br /><br />
            <span className="font-bold text-deep_purple-a400">Unlimited ESG Assessments & supply chain Reports</span> will be reviewed and scope for improvements identified
            <br /><br />
            Call support with a specialist consultant
            <br /><br />
            <span className="font-bold text-deep_purple-a400">AI support</span>
          </>
        ) : (
          <>
            <span className="text-gray-600">
              Ability to select questionnaires which generate ESG Assessments & Reports
              <br /><br />
              Invitations can be sent by EcoEasi to
              <br />
            </span>
            <span className="font-bold text-deep_purple-a400">30 supply chain SMEs</span>
            <span className="text-gray-600">
              &nbsp;
              <br /><br />
            </span>
            <span className="font-bold text-deep_purple-a400">
              30 ESG Assessments & supply chain Reports will be reviewed and scope for improvements identified
              <br /><br />
              AI support
            </span>
          </>
        )}
      </Text>
      <Button
        variant="outline"
        shape="round"
        className="mb-2 min-w-[200px] rounded-[36px] !border border-deep_purple-a400 text-grey-a400 px-[33px] font-bold sm:px-4 hover:bg-deep_purple-a400 hover:text-white transition-colors duration-300"
      >
        {buttonText}
      </Button>
    </div>
  );
}
