import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import AuthorSection from "./AuthorSection";

const TeamMember = () => {
  return (
    <>
      <AuthorSection />
      <section
        className="team-area-three jarallax"
        style={{ backgroundImage: `url(/img/team-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span style={{ color: "#ff0000" }}>Our Team</span>
            <h2>Meet The Team</h2>
          </div>
          <Swiper
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            speed={1500}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, // Mobile devices
              },
              414: {
                slidesPerView: 2, // Small tablets
              },
              768: {
                slidesPerView: 3, // Tablets
              },
              992: {
                slidesPerView: 4, // Laptops and desktops
              },
              1200: {
                slidesPerView: 4, // Larger screens
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-wrap"
          >
            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/harsh.png"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/marwahstudios/"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/mstvnoida"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Harsh Vardhan Singh</h3>
                  <span>Executive Program Producer</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/shubham.png"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/marwahstudios/"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/mstvnoida"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Shubham Tanwar</h3>
                  <span>Cameraman</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/arvindhh.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/marwahstudios/"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/mstvnoida"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Arvind Kumar Yadav</h3>
                  <span>Video Editor</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/ronitti.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/marwahstudios/"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/mstvnoida"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Rounit Kumar</h3>
                  <span>Assistant Editor</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team-7.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
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

                <div className="team-content">
                  <h3>Sushil Bharti</h3>
                  <span>Director, Broadcasting</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team-10.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
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

                <div className="team-content">
                  <h3>Harsh Vardhan Singh</h3>
                  <span>Anchor & Producer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team-9.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Keser Singh</h3>
                  <span>Camera Person</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team-8.jpg"
                    alt="Image"
                    width={385}
                    height={450}
                  />

                  <ul className="social">
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Love Gour</h3>
                  <span>Video Editor</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TeamMember;
