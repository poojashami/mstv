import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div
        className="testimonial-area ptb-100"
        style={{
          backgroundImage: `url(/img/testimonial-bg.jpg)`,
        }}
      >
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            speed={1500}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap"
          >
            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  MSTV is an online television channel solely designed to
                  educate and entertain the masses around the globe by
                  showcasing various short films, informative programs on varied
                  topics and interactions with eminent people from walks of life
                  hailing from varied parts of the world.
                </p>

                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  MSTV is an online television channel solely designed to
                  educate and entertain the masses around the globe by
                  showcasing various short films, informative programs on varied
                  topics and interactions with eminent people from walks of life
                  hailing from varied parts of the world.
                </p>

                <h3>Wade Dave</h3>
                <span>Caretive Director</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  MSTV is an online television channel solely designed to
                  educate and entertain the masses around the globe by
                  showcasing various short films, informative programs on varied
                  topics and interactions with eminent people from walks of life
                  hailing from varied parts of the world.
                </p>

                <h3>Seth Ivan</h3>
                <span>Movie Editor</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
