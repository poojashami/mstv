import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Footer from "../components/_App/Footer";
import LatestNews from "../components/HomeThree/LatestNews";

const EventDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Event Detail"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Event Detail"
        bgImg="/img/page-banner/page-banner5.jpg"
      />

      <div className="blog-details-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* BlogDetailsContent */}
              <BlogDetailsContent />
            </div>

            <div className="col-lg-4">
              {/* Blog Sidebar */}
              <div className="blog-right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
        <LatestNews />
      </div>

      <Footer />
    </>
  );
};

export default EventDetails;
