import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import HealYourLife from "../components/Highlight/HealYourLife";

const HealYourLifePage = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Heal Your Life"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Heal Your Life"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <HealYourLife />

      <Footer />
    </>
  );
};

export default HealYourLifePage;
