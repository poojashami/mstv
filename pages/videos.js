import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioCard from "../components/PortfolioColumnsFour/PortfolioCard";
import Footer from "../components/_App/Footer";

const PortfolioColumnsFour = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Videos"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Videos"
        bgImg="/img/page-banner/page-banner19.jpg"
      />

      <PortfolioCard />

      <Footer />
    </>
  );
};

export default PortfolioColumnsFour;
