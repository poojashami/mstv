import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import UpcomingMovies from "../HomeThree/UpcomingMovies";

const Kalasangam = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/RK965S9ZhvA?si=p6QHyD1sUGSta9wb?autoplay=1&mute=1",
        ]}
      />

      <section className="portfolio-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Action</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Shooting</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Technology</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Horror</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Musical</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Art</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Studio</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Documentary</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/kalasangam.png)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  {/* <span>Action</span> */}
                  <h3>
                    <Link href="/portfolio-details">
                      Yogshala Expo 2018 | Karmic Routes | Journalist Shreeya
                      Katyal | Marwah Studios | MSTV
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            {/* <div className="col-12 text-center">
              <Link href="#" className="default-btn">
                View More
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <UpcomingMovies />
      </section>
    </>
  );
};

export default Kalasangam;
