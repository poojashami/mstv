import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const UpcomingMovies = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="latest-trailer-two bg-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Latest Trailer</span>
            <h2>Upcoming Movies By Our Production House</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="latest-trailer-slider"
          >
            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer1.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer2.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer3.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer4.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer5.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="latest-trailer-item">
                <Image
                  src="/img/latest-trailer/latest-trailer6.jpg"
                  alt="Image"
                  width={285}
                  height={400}
                />

                <div className="caption">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div
                        className="play-video"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default UpcomingMovies;
