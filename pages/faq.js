import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/_App/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Faq"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImg="/img/page-banner/page-banner3.jpg"
      />

      <FaqContent />

      <Footer />
    </>
  );
};

export default Faq;
