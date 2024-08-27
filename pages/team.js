import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamMemberCard from "../components/Team/TeamMemberCard";
import Footer from "../components/_App/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        bgImg="/img/page-banner/page-banner21.jpg"
      />

      <TeamMemberCard />

      <Footer />
    </>
  );
};

export default Team;
