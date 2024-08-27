import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import MyAccountForm from "../components/MyAccount/MyAccountForm";
import Footer from "../components/_App/Footer";

const MyAccount = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="My Account"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Account"
        bgImg="/img/page-banner/page-banner15.jpg"
      />

      <MyAccountForm />

      <Footer />
    </>
  );
};

export default MyAccount;
