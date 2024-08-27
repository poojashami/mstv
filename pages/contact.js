import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import GoogleMap from "../components/Contact/GoogleMap";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
        bgImg="/img/page-banner/page-banner2.jpg"
      />

      <GoogleMap />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
