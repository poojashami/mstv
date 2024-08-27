import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const UpcomingMovies = () => {
  const [toggler, setToggler] = useState(false); // Manage lightbox state
  const [videoSrc, setVideoSrc] = useState(""); // Manage current video source

  // List of video URLs corresponding to each slide
  const videoSources = [
    "https://www.youtube.com/watch?v=vwzl9ik_lfw",
    "https://www.youtube.com/watch?v=rWeqTwAu978",
    "https://www.youtube.com/watch?v=ytIiCUR47Wc",
    "https://www.youtube.com/watch?v=CundeicfZo0",
    "https://www.youtube.com/watch?v=hlb-a6KL2z4",
    "https://www.youtube.com/watch?v=vwzl9ik_lfw",
  ];

  // Handle when a slide is clicked
  const handleVideoClick = (index) => {
    setVideoSrc(videoSources[index]); // Set the current video URL
    setToggler(!toggler); // Open the lightbox
  };
  const movieTitles = [
    "The Real Talk",
    "Bharat Ki Punar Knoj",
    "Heal Your Life",
    "Today Talk",
    "Roobaroo",
    "The Real Talk",
  ];
  const movieTime = [
    "Daily 11:00 PM",
    "Daily 10:00 PM",
    "Daily 11:00 AM",
    "Daily 10:00 AM",
    "Daily 11:30 PM",
    "Daily 12:00 PM",
  ];
  return (
    <>
      {/* Lightbox component */}
      <FsLightbox toggler={toggler} sources={[videoSrc]} />

      <div
        className="latest-trailer-three ptb-100 jarallax"
        style={{ backgroundImage: `url(/img/latest-trailer-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span style={{ color: "#ff0000" }}>MSTV Featured Program</span>
            <h2>
              MSTV Featured Program shows Documentaries & movies without
              buffering
            </h2>
          </div>

          {/* Swiper component to display the carousel of videos */}
          <Swiper
            spaceBetween={30}
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
            }}
            modules={[Pagination, Autoplay]}
            className="latest-trailer-wrap-two"
          >
            {/* Map over videoSources to create a slide for each video */}
            {videoSources.map((source, index) => (
              <SwiperSlide key={index}>
                <div className="latest-trailer-item">
                  <Image
                    src={`/img/latest-trailer/movie-${index + 1}.jpg`}
                    alt={`Trailer ${index + 1}`}
                    width={285}
                    height={400}
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
                  {/* Footer content */}
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
