import { Img, Heading } from "../../components";
import React from "react";

export default function ProgressOverviewSection({ progress }) {
  return (
    <>
      {/* progress overview section */}
      <div className="mt-[22px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full flex-col gap-2.5">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Heading
                size="headingxs"
                as="h1"
                className="text-[16px] font-bold tracking-[0.08px] text-blue_gray-900_01"
              >
                Basic Module Progress
              </Heading>
              <Heading 
                as="h2" 
                className="self-start text-[14px] font-medium tracking-[0.07px] text-blue_gray-900_01"
              >
                {progress}%
              </Heading>
            </div>
            <div className="h-[10px] w-full bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-500 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
