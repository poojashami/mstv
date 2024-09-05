import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const PortfolioCard = () => {
  const [lightboxControllers, setLightboxControllers] = useState({
    toggler1: false,
    source1: "https://www.youtube.com/embed/bk7McNUjWgw",
    toggler2: false,
    source2: "https://www.youtube.com/embed/other-video-1",
    toggler3: false,
    source3: "https://www.youtube.com/embed/other-video-2",
    toggler4: false,
    source4: "https://www.youtube.com/embed/other-video-3",
    // Add more sources and togglers as needed
  });

  const toggleLightbox = (index) => {
    setLightboxControllers((prevState) => ({
      ...prevState,
      [`toggler${index}`]: !prevState[`toggler${index}`],
    }));
  };

  return (
    <>
      {/* Add lightbox instances for each video */}
      <FsLightbox
        toggler={lightboxControllers.toggler1}
        sources={[lightboxControllers.source1]}
      />
      <FsLightbox
        toggler={lightboxControllers.toggler2}
        sources={[lightboxControllers.source2]}
      />
      <FsLightbox
        toggler={lightboxControllers.toggler3}
        sources={[lightboxControllers.source3]}
      />
      <FsLightbox
        toggler={lightboxControllers.toggler4}
        sources={[lightboxControllers.source4]}
      />

      <section className="portfolio-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* Portfolio Item 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/mqdefault.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => toggleLightbox(1)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  {/* <span>Action</span> */}
                  <span>
                    <Link href="/portfolio-details">
                      CROWNING CEREMONY | LUXURYDOT. PR | ICMEI | Marwah Studios
                      | MSTV
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/mqdefault1.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => toggleLightbox(2)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  {/* <span>Shooting</span> */}
                  <span>
                    <Link href="/portfolio-details">
                      Actor, Writer & Director Karan Razdan with Journalist
                      Shreeya Katyal | Marwah Studios | MSTV
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/mqdefault2.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => toggleLightbox(3)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  {/* <span>Technology</span> */}
                  <span>
                    <Link href="/portfolio-details">
                      Actor Kamaal Malik with Journalist Shreeya Katyal | Marwah
                      Studios | MSTV
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/mqdefault3.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => toggleLightbox(4)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  {/* <span>Horror</span> */}
                  <span>
                    <Link href="/portfolio-details">
                      Film Director Iran Ebrahim Hatamikia with Journalist
                      Shreeya Katyal | MSTV
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <Link href="#" className="default-btn">
              View More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCard;
