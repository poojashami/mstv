import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";
import Footer from "../components/_App/Footer";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Forgot Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Forgot Password"
        bgImg="/img/page-banner/page-banner16.jpg"
      />

      <ForgotPasswordForm />

      <Footer />
    </>
  );
};

export default ForgotPassword;
