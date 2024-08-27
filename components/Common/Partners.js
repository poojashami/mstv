import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <div
        className="partner-area ptb-100"
        style={{ backgroundImage: `url(/img/partner-bg.jpg)` }}
      >
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            speed={1000}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-wrap"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner1.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner2.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner3.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner4.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner5.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <Image
                    src="/img/partners/partner6.png"
                    alt="Image"
                    width={105}
                    height={120}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
