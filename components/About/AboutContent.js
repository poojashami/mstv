import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <>
      <div className="about-area-two bio-data ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span style={{ color: "#ff0000" }}>Who we are</span>
                <h2>
                  MSTV Har Pal Aap Ke Saath | Your Every Moment, Our Shared
                  Journey
                </h2>

                {/* <h3>Who We Are</h3> */}
                <p>
                  MSTV is not just about entertainment; it's also a source of
                  knowledge and enlightenment. The channel's thought-provoking
                  documentaries delve into various subjects, from history and
                  science to culture and society. These documentaries provide
                  viewers with valuable insights and perspectives, fostering a
                  sense of curiosity and understanding about the world around
                  them.
                </p>

                <h5 className="mt-30">
                  MSTV Internet is providing one of the fastest internet
                </h5>
                <h5 className="mt-30">
                  Reliable for both gamers and regular users.
                </h5>
                <h5 className="mt-30">
                  Get a dedicated server hosted on your end
                </h5>
                {/* <p>
                  Video production work with producing video content. It is the
                  analogical of film making, but the images are digitally
                  recorded instead of film stock. There are three levels of
                  video production.
                </p> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/news/news15.jpg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/testimonial.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img r-sm mb-0">
                    <Image
                      src="/img/instagram3.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img mb-0">
                    <Image
                      src="/img/newsandmedia.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
