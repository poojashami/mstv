import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const PortfolioCard = () => {
  const [lightboxControllers, setLightboxControllers] = useState({
    toggler: false,
    source: "",
  });
  const [showMore, setShowMore] = useState(false); // State to handle "View More"

  // Array of videos with data
  const videos = [
    {
      thumbnail: "/img/portfolio/videos2.png",
      title:
        "Guest of Marwah Studios | Upali Prakash Chhabra | Investment Consultant | Model | MSTV",
      videoSource:
        "https://www.youtube.com/embed/XhgNiArG8uk?si=cyRUbGcPf4KSCmkL",
    },
    {
      thumbnail: "/img/portfolio/videos3.png",
      title:
        "Guest of Marwah Studios | Dr. Rama Singh | Poet | 10th GLFN 2024 | Marwah Studios | MSTV",
      videoSource:
        "https://www.youtube.com/embed/wOQChfemdMY?si=tgZ_r65n5SF9_r5J",
    },
    {
      thumbnail: "/img/portfolio/videos4.png",
      title:
        "Sunita Kaul with Sumita Singh | Deputy Gen Manager (Corp. Comm.) at Indian Oil Corp | MSTV",
      videoSource:
        "https://www.youtube.com/embed/QXIe4Z_fw90?si=ALUvaTCMtFwX36Vz",
    },
    {
      thumbnail: "/img/portfolio/videos5.png",
      title:
        "Guest of Marwah Studios | Krishna Kalra | Business Women | Marwah Studios | MSTV",
      videoSource:
        "https://www.youtube.com/embed/S6mJa-6aGGU?si=pCQXukEZRlFZW1Ko",
    },
    {
      thumbnail: "/img/portfolio/mqdefault.jpg",
      title:
        "CROWNING CEREMONY | LUXURYDOT. PR | ICMEI | Marwah Studios | MSTV",
      videoSource: "https://www.youtube.com/embed/bk7McNUjWgw",
    },
    {
      thumbnail: "/img/portfolio/mqdefault1.jpg",
      title:
        "Actor, Writer & Director Karan Razdan with Journalist Shreeya Katyal | Marwah Studios | MSTV",
      videoSource: "https://www.youtube.com/embed/other-video-1",
    },
    {
      thumbnail: "/img/portfolio/mqdefault2.jpg",
      title:
        "Actor Kamaal Malik with Journalist Shreeya Katyal | Marwah Studios | MSTV",
      videoSource: "https://www.youtube.com/embed/other-video-2",
    },
    {
      thumbnail: "/img/portfolio/mqdefault3.jpg",
      title:
        "Film Director Iran Ebrahim Hatamikia with Journalist Shreeya Katyal | MSTV",
      videoSource: "https://www.youtube.com/embed/other-video-3",
    },
  ];

  const toggleLightbox = (source) => {
    setLightboxControllers({
      toggler: !lightboxControllers.toggler,
      source: source,
    });
  };

  const handleViewMore = () => {
    setShowMore(!showMore); // Toggle showMore state
  };

  return (
    <>
      {/* Lightbox instance */}
      <FsLightbox
        toggler={lightboxControllers.toggler}
        sources={[lightboxControllers.source]}
      />

      <section className="portfolio-area">
        <div className="container">
          <div className="row justify-content-center">
            {/* Render portfolio items */}
            {videos
              .slice(0, showMore ? videos.length : 4)
              .map((video, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="single-portfolio">
                    <div
                      className="portfolio-image"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    >
                      <div className="price-wrap">
                        <div
                          onClick={() => toggleLightbox(video.videoSource)}
                          className="play-video"
                        >
                          <i className="flaticon-play"></i>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio-content">
                      <span>
                        <Link href="#">{video.title}</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* View More Button */}
          <div className="col-12 text-center">
            <button onClick={handleViewMore} className="default-btn">
              {showMore ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCard;
