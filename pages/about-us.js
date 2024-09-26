import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFacts from "../components/About/FunFacts";
import WeProvideServices from "../components/About/WeProvideServices";
import TeamStyleTwo from "../components/Common/TeamStyleTwo";
import AwardWinningMovies from "../components/HomeThree/AwardWinningMovies";
import ContactWithUs from "../components/Common/ContactWithUs";
import PartnersStyleThree from "../components/Common/PartnersStyleThree";
import Footer from "../components/_App/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About US"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About US"
        bgImg="/img/page-banner/page-banner1.jpg"
      />

      <AboutContent />

      <FunFacts />

      <WeProvideServices />

      <TeamStyleTwo />

      {/* <div className="bg-color">
        <AwardWinningMovies />
      </div> */}
      <AwardWinningMovies />

      <ContactWithUs />

      <PartnersStyleThree />

      <Footer />
    </>
  );
};

export default About;
