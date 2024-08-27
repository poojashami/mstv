import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent from "../components/PortfolioDetails/PortfolioDetailsContent";
import Footer from "../components/_App/Footer";

const PortfolioDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Video Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Video Details"
        bgImg="/img/page-banner/page-banner8.jpg"
      />

      <PortfolioDetailsContent />

      <Footer />
    </>
  );
};

export default PortfolioDetails;
