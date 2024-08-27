import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title" style={{ color: "#ff0000" }}>
              Latest News
            </span>
            <h2>Latest News & Events</h2>
          </div>

          <div className="row justify-content-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
