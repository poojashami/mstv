import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Roobaroo from "../components/Highlight/Roobaroo";

const RoobarooPage = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Rubaroo"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Rubaroo"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <Roobaroo />

      <Footer />
    </>
  );
};

export default RoobarooPage;
