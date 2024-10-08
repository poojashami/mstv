import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogTwoColumns from "../components/Blog/BlogTwoColumns";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Footer from "../components/_App/Footer";

const BlogLeftSidebar = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Left Sidebar"
        bgImg="/img/page-banner/page-banner8.jpg"
      />

      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Blog Sidebar */}
              <div className="blog-left-sidebar">
                <BlogSidebar />
              </div>
            </div>

            <div className="col-lg-8">
              {/* BlogTwoColumns */}
              <BlogTwoColumns />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogLeftSidebar;
