import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <section className="blog-area-three bg-color-two pt-100 pb-70">
        <div className="container">
          <div className="section-title white-title">
            <span className="top-title" style={{ color: "#ff0000" }}>
              Latest News
            </span>
            <h2>Latest News & Events</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/latestNew.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  {/* <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">admin_mstv</Link>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-comment"></i> 0 Comments
                      </a>
                    </li>
                  </ul> */}

                  <Link href="/blog-details">
                    <h3>
                      AAFT and ICMEI Celebrate 78th Independence Day with
                      Patriotic Fervor at Noida Film City
                    </h3>
                  </Link>

                  <p>
                    Noida, India – August 15, 2024 – The 78th Independence Day
                    of the Republic of India was celebrated with great
                    enthusiasm and patriotism at Marwah Studios, Noida Film
                    City.
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
                    src="/img/blog/latestnews2.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  {/* <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">admin_mstv</Link>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-comment"></i> 0 Comments
                      </a>
                    </li>
                  </ul> */}

                  <Link href="/blog-details">
                    <h3>
                      Dr. Sandeep Marwah Honored with Bharat Ratan Dr. Abdul
                      Kalam Global Award 2024 for World Peace
                    </h3>
                  </Link>

                  <p>
                    Dr. Sandeep Marwah, Chancellor of AAFT University and
                    founder of Noida Film City, has been honored with the
                    prestigious Bharat Ratan Dr. Abdul Kalam Global Award 2024.
                    The award recognizes his extraordinary contributions to
                    bringing love, peace, and unity through art.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-blog">
                <Link href="/blog-details">
                  <Image
                    src="/img/blog/latestNews3.jpg"
                    alt="Image"
                    width={570}
                    height={400}
                  />
                </Link>

                <div className="blog-content">
                  {/* <ul>
                    <li>
                      <i className="flaticon-user"></i>
                      <Link href="#">admin_mstv</Link>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-comment"></i> 0 Comments
                      </a>
                    </li>
                  </ul> */}

                  <Link href="/blog-details">
                    <h3>
                      WPDRF and Brahma Kumaris Unite to Promote Indian Festivals
                      and Cultural Traditions
                    </h3>
                  </Link>

                  <p>
                    Noida, India – August 2024 – In a powerful initiative to
                    preserve and promote India’s rich cultural heritage, the
                    World Peace Development and Research Foundation (WPDRF), in
                    association with Brahma Kumaris.
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
