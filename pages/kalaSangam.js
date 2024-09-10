import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Kalasangam from "../components/Highlight/Kalasangam";

const KalaSangamPage = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Kala Sangam"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Kala Sangam"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <Kalasangam />

      <Footer />
    </>
  );
};

export default KalaSangamPage;
