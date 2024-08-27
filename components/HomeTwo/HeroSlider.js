import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <>
      <div className="hero-slider-area-two">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="hero-slider-wrap-two"
        >
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider4.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text">
                      <ul>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand1.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand1.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand2.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand2.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand3.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand3.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                      </ul>

                      <h1>Video Solution For Every Stage</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider5.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text">
                      <ul>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand1.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand1.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand2.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand2.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand3.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand3.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                      </ul>

                      <h1>Excellent Ideas Brilliantly Done</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider6.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="hero-slider-text">
                      <ul>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand1.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand1.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand2.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand2.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <Image
                              src="/img/brand/brand3.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                            <div className="white-logo">
                              <Image
                                src="/img/brand/white-brand3.png"
                                alt="Image"
                                width={105}
                                height={80}
                              />
                            </div>
                          </Link>
                        </li>
                      </ul>

                      <h1>Imagine Your Business Has Its Own Studio</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Start Social Wrap */}
        <div className="social-wrap">
          <ul>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
