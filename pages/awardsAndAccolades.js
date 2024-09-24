import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import AwardsAndAccolades from "../components/AwardsAndAccolades";

const AwardsAndAccoladesPages = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Awards & Accolades"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Awards & Accolades"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <AwardsAndAccolades />

      <Footer />
    </>
  );
};

export default AwardsAndAccoladesPages;
