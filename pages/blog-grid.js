import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/_App/Footer";
import Image from "next/image";

const BlogGrid = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="OUR Programs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="OUR Programs"
        bgImg="/img/page-banner/page-banner6.jpg"
      />

      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title" style={{ color: "#ff0000" }}>
              Our Events
            </span>
            <h2>Get The All Events</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog1.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>

                    <li>
                      <i className="flaticon-calendar"></i>
                      17/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>Video Production Services Your Business Must Have</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog2.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>

                    <li>
                      <i className="flaticon-calendar"></i>
                      18/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>
                      Why You Need To Hire top className Video Production
                      company
                    </h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog3.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>

                    <li>
                      <i className="flaticon-calendar"></i>
                      19/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>Choosing A Video Location For Your Next Project</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog7.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i>
                      17/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>Video Production Services Your Business Must Have</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog8.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i>
                      18/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>
                      Why You Need To Hire top className Video Production
                      company
                    </h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog9.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">Admin</Link>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i>
                      19/07/2023
                    </li>
                  </ul>

                  <Link href="/blog-details">
                    <h3>Choosing A Video Location For Your Next Project</h3>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <Link href="/blog-details" className="prev page-numbers">
                  <i className="bx bx-chevron-left"></i>
                </Link>

                <span className="page-numbers current">1</span>

                <Link href="/blog-details" className="page-numbers">
                  2
                </Link>

                <Link href="/blog-details" className="page-numbers">
                  3
                </Link>

                <Link href="/blog-details" className="page-numbers">
                  4
                </Link>

                <Link href="/blog-details" className="next page-numbers">
                  <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogGrid;
