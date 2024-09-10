import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import TheRealTalk from "../components/Highlight/TheRealTalk";

const RoobarooPage = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="The Real Talk"
        homePageUrl="/"
        homePageText="Home"
        activePageText="The Real Talk"
        bgImg="/img/page-banner/page-banner17.jpg"
      />
      <TheRealTalk />

      <Footer />
    </>
  );
};

export default RoobarooPage;
