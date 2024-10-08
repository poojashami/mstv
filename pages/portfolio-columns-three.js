import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioCard from "../components/PortfolioColumnsThree/PortfolioCard";
import Footer from "../components/_App/Footer";
import HealYourLife from "../components/Highlight/HealYourLife";

const PortfolioColumnsThree = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Heal You Life"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Heal You Life"
        bgImg="/img/page-banner/page-banner17.jpg"
      />

      {/* <PortfolioCard /> */}
      <HealYourLife />

      <Footer />
    </>
  );
};

export default PortfolioColumnsThree;
