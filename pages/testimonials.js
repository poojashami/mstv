import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TestimonialsCaed from "../components/Testimonials/TestimonialsCaed";
import Footer from "../components/_App/Footer";

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImg="/img/page-banner/page-banner22.jpg"
      />

      <TestimonialsCaed />

      <Footer />
    </>
  );
};

export default Testimonials;
