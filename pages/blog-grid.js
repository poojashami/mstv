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
                <Link href="/program-details">
                  <Image
                    src="/img/news/news4.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>
                      Swapnil Rai Presents “Networked Bollywood” to Sandeep
                      Marwah at Marwah Studios
                    </h3>
                  </Link>

                  <p>
                    Noida, 21st August 2024 – Dr. Swapnil Rai, is an Assistant
                    Professor in the Department of Film, Television, and Media
                    at the University of Michigan, Ann Arbor, USA, presented her
                    newly published book
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/program-details">
                  <Image
                    src="/img/news/news5.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>
                      AAFT Celebrates Raksha Bandhan with Members of Brahma
                      Kumaris at Marwah Studios
                    </h3>
                  </Link>

                  <p>
                    Noida, 20th August 2024 – The Asian Academy of Film and
                    Television (AAFT) marked the auspicious occasion of Raksha
                    Bandhan with a special celebration at Marwah Studios, Noida
                    Film City.
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/program-details">
                  <Image
                    src="/img/news/news14.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>World Photography Day Celebrated at AAFT</h3>
                  </Link>

                  <p>
                    Noida, August 19, 2024: The AAFT School of Photography
                    commemorated World Photography Day with great enthusiasm at
                    Noida Film City. The event, held on August 19, celebrated
                    the art and craft of photography, bringing together
                    students, faculty, and photography enthusiasts to honor the
                    rich history and evolving trends in the field.
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/program-details">
                  <Image
                    src="/img/news/news2.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>
                      Bharat Ratna Atal Bihari Vajpayee Remembered at AAFT
                    </h3>
                  </Link>

                  <p>
                    Noida, August 16, 2024: The late Bharat Ratna Atal Bihari
                    Vajpayee, an iconic statesman, leader, poet, and former
                    Prime Minister of India, was fondly remembered at an event
                    held by the Asian Academy of Film and Television (AAFT) on
                    his death anniversary.
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/program-details">
                  <Image
                    src="/img/news/news8.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>
                      ICMEI Congratulates the Republic of Congo on its
                      Independence Day
                    </h3>
                  </Link>

                  <p>
                    Noida, August 20, 2024: The International Chamber of Media
                    and Entertainment Industry (ICMEI), led by its visionary
                    President Dr. Sandeep Marwah, extends its heartfelt
                    congratulations to the people of the Republic of Congo on
                    the occasion of their Independence Day.
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <Link href="/program-details">
                  <Image
                    src="/img/news/news15.jpg"
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
                      06/09/2024
                    </li>
                  </ul>

                  <Link href="/program-details">
                    <h3>
                      ICMEI Congratulates Estonia on the Day of Restoration of
                      Independence
                    </h3>
                  </Link>

                  <p>
                    Noida, August 20, 2024: The International Chamber of Media
                    and Entertainment Industry (ICMEI), under the esteemed
                    leadership of Dr. Sandeep Marwah, extends its warmest
                    congratulations to the people of Estonia on the occasion of
                    the Day of Restoration of Independence.
                  </p>

                  <Link href="/program-details" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <Link href="/program-details" className="prev page-numbers">
                  <i className="bx bx-chevron-left"></i>
                </Link>

                <span className="page-numbers current">1</span>

                <Link href="/program-details" className="page-numbers">
                  2
                </Link>

                <Link href="/program-details" className="page-numbers">
                  3
                </Link>

                <Link href="/program-details" className="page-numbers">
                  4
                </Link>

                <Link href="/program-details" className="next page-numbers">
                  <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogGrid;
