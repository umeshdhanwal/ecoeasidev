import { Helmet } from "react-helmet";
import EffortlessESGManagementSection from "./EffortlessESGManagementSection";
import React from "react";

export default function Group368Page() {
  return (
    <>
      <Helmet>
        <title>Manage ESG Data for SME Suppliers with EcoEasi</title>
        <meta
          name="description"
          content="EcoEasi offers a low-cost Supply Chain ESG Reporting Platform for mid-sized buyers to effortlessly manage and analyze ESG data from SME suppliers. Get in touch to learn more."
        />
      </Helmet>
      <div className="relative h-[1042px] w-full content-center lg:h-auto md:h-auto">
        <div className="relative mx-auto h-[1042px] w-full content-center lg:h-auto md:h-auto">
          <div className="mx-auto flex h-[1042px] w-full bg-[url(/public/images/img_banner.png)] bg-cover bg-no-repeat p-12 lg:h-auto md:h-auto md:p-5 sm:p-4">
            <EffortlessESGManagementSection />
          </div>
        </div>
        <div className="absolute bottom-[5%] left-0 right-0 m-auto flex items-center justify-center" />
      </div>
    </>
  );
}
