import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogTwoColumns from "../components/Blog/BlogTwoColumns";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Footer from "../components/_App/Footer";

const BlogRightSidebar = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News And Media"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News And Media"
        bgImg="/img/page-banner/page-banner8.jpg"
      />

      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* BlogTwoColumns */}
              <BlogTwoColumns />
            </div>

            <div className="col-lg-4">
              {/* Blog Sidebar */}
              <div className="blog-right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogRightSidebar;
