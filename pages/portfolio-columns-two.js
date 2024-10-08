import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioCard from "../components/PortfolioColumnsTwo/PortfolioCard";
import Footer from "../components/_App/Footer";

const PortfolioColumnsTwo = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Columns Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Two"
        bgImg="/img/page-banner/page-banner16.jpg"
      />

      <PortfolioCard />

      <Footer />
    </>
  );
};

export default PortfolioColumnsTwo;
