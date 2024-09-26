import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const UpcomingMovies = () => {
  const [toggler, setToggler] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const router = useRouter();

  // List of paths for navigation
  const moviePaths = [
    "/theRealTalk",
    "/bharatKiKhoj",
    "/healYourLife",
    "/kalaSangam",
    "/roobaroo",
  ];

  // Handle when a slide is clicked
  const handleVideoClick = (index) => {
    // Assuming videoSrc is an array of URLs, set it here
    setVideoSrc(videoSrc[index]); // Set the current video URL
    setToggler(!toggler); // Open the lightbox
  };

  const movieTitles = [
    "The Real Talk",
    "Bharat Ki Punar Khoj",
    "Heal Your Life",
    "Kala Sangam",
    "Rubaroo",
  ];

  const movieTime = [
    "Daily 11:00 PM",
    "Daily 10:00 PM",
    "Daily 11:00 AM",
    "Daily 10:00 AM",
    "Daily 11:30 PM",
  ];

  return (
    <>
      <FsLightbox toggler={toggler} sources={[videoSrc]} />

      <div
        className="latest-trailer-three  jarallax"
        style={{ backgroundImage: `url(/img/latest-trailer-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span style={{ color: "#ff0000" }}>MSTV Featured Program</span>
            <h2>
              MSTV Featured Program shows, Documentaries & movies without
              buffering
            </h2>
          </div>

          <Swiper
            spaceBetween={0}
            pagination={{ clickable: true }}
            speed={1000}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            modules={[Pagination, Autoplay]}
            className="latest-trailer-wrap-two"
          >
            {moviePaths.map((source, index) => (
              <SwiperSlide key={index}>
                <div className="latest-trailer-item">
                  <Link href={moviePaths[index]}>
                    <Image
                      src={`/img/latest-trailer/movie-${index + 1}.png`}
                      alt={`Trailer ${index + 1}`}
                      width={200}
                      height={320}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleVideoClick(index)} // Handle video click
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => handleVideoClick(index)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <footer
                    className="video-footer mt-4"
                    style={{ color: "#fff" }}
                  >
                    <h6 style={{ color: "#fff" }}>{movieTitles[index]}</h6>
                    <div>{movieTime[index]}</div>
                  </footer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default UpcomingMovies;
