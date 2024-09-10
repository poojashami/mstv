import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import BharatKiKhoj from "../components/Highlight/BharatKiKhoj";

const BharatKiKhojPage = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Bharat Ki Punar Khoj"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Bharat Ki Punar Khoj"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <BharatKiKhoj />

      <Footer />
    </>
  );
};

export default BharatKiKhojPage;
