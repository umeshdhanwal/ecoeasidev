import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BlogPostSection from "./BlogPostSection";
import React from "react";

export default function BlogPostPage() {
  return (
    <>
      <Helmet>
        <title>ESG Reporting Challenges for SMEs - EcoEasi Blog</title>
        <meta
          name="description"
          content="Discover how EcoEasi addresses the challenges faced by supply chain SMEs in sustainability reporting under CSRD. Learn about our low-cost ESG reporting platform in our latest blog post."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          <Header />

          {/* blog post section */}
          <BlogPostSection />
          <div className="flex flex-col items-center">
            <div className="container-xs mb-10 flex flex-col gap-[146px] lg:gap-[109px] lg:px-5 md:gap-[109px] md:px-5 sm:gap-[73px]">
              <div>
                <div className="h-px bg-gray-300_02" />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
