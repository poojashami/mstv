import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialsTwo = () => {
  return (
    <>
      <div className="testimonial-area-two bg-color ptb-100">
        <div className="container">
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
              992: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap-two"
          >
            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client1.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
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
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client2.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
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
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client3.jpg"
                  alt="Image"
                  width="75"
                  height="75"
                />
                <i className="flaticon-quotation"></i>
                <p>
                  MSTV is an online television channel solely designed to
                  educate and entertain the masses around the globe by
                  showcasing various short films, informative programs on varied
                  topics and interactions with eminent people from walks of life
                  hailing from varied parts of the world
                </p>

                <h3>Seth Ivan</h3>
                <span>Movie Editor</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-text">
                <Image
                  src="/img/clients/client4.jpg"
                  alt="Image"
                  width={75}
                  height={75}
                />
                <i className="flaticon-quotation"></i>
                <p>
                  MSTV is an online television channel solely designed to
                  educate and entertain the masses around the globe by
                  showcasing various short films, informative programs on varied
                  topics and interactions with eminent people from walks of life
                  hailing from varied parts of the world.
                </p>

                <h3>Riley Gilbert</h3>
                <span>Movie Composer</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialsTwo;
