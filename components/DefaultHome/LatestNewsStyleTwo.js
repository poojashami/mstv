import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNewsStyleTwo = () => {
  return (
    <>
      <div className="blog-area-two bg-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title" style={{ color: "#ff0000" }}>
              Latest News
            </span>
            <h2>Latest News & Events</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="single-blog bg-1"
                style={{ backgroundImage: `url(/img/blog/blog4.jpg)` }}
              >
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

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog5.jpg"
                    alt="Image"
                    width={600}
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
                    <h3>Why You Need To Hire Top className Video Production</h3>
                  </Link>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="single-blog mb-0">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/blog6.jpg"
                    alt="Image"
                    width={600}
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
                    <h3>Choosing A Video Location For Your Next Project</h3>
                  </Link>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNewsStyleTwo;
