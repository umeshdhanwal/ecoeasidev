import { Text, Heading, Img } from "../../components";
import React from "react";
export default function AboutUsSection2() {
  return (
    <>
      {" "}
      {/* about us section */}{" "}
      <div className="flex justify-center">
        {" "}
        <div className="container-xs flex items-start justify-between gap-5 lg:px-5 md:flex-col md:px-5">
          {" "}
          <Img
            src="images/img_picture_14_2.png"
            alt="Profile Image"
            className="h-[296px] w-[296px] rounded-[148px] object-cover md:w-full"
          />{" "}
          <div className="flex w-[74%] flex-col items-start justify-center gap-[22px] self-center md:w-full">
            {" "}
            <Heading
              size="headingxl"
              as="h5"
              className="text-[36px] font-bold text-gray-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              {" "}
              Magali Lopez{" "}
            </Heading>{" "}
            <Text
              size="text3xl"
              as="p"
              className="w-full text-[25px] font-normal leading-[159.4%] text-gray-600 lg:text-[21px]"
            >
              {" "}
              <>
                {" "}
                Magali is an experienced User Design consultant with more than 7
                years experience in working on complex products and platforms.{" "}
                <br /> <br /> Magali’s experience spans various sectors,
                including Financial Services, Data Analytics, Education, and
                Software Development. Magali has taken on leadership roles.
                Additionally, Magali has delivered numerous lectures and
                courses. <br /> <br /> Magali’s is passionate about tackling
                complex problems and delivering solutions that enhance user
                experience while effectively meeting customer needs. She
                believes in a user-centric design approach, striving to balance
                functionality and aesthetics in her work.{" "}
              </>{" "}
            </Text>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
