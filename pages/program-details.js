import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";
import BlogSidebar from "../components/Blog/BlogSidebar";
import Footer from "../components/_App/Footer";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Program Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Program Details"
        bgImg="/img/page-banner/page-banner5.jpg"
      />

      <div className="blog-details-area">
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
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
