import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-area-two three bg-color-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span style={{ color: "#ff0000" }}>MSTV Journey</span>
                <h2>MSTV : Journey to Unite the World Through Art & Culture</h2>
                <p>
                  MSTV is more than just a spectator; it's an active participant
                  in fostering cultural exchange. The channel facilitates
                  conversations, collaborations, and interactions that promote a
                  deeper understanding of various cultures. Through interviews,
                  documentaries, and live events, MSTV brings artists, creators,
                  and thinkers together, enabling them to share their insights,
                  stories, and visions with a global audience.
                </p>

                <Link href="/about" className="default-btn three">
                  Know More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/about-grid/latestimage.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img">
                    <Image
                      src="/img/about-grid/thumnal.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img m-rs mb-0">
                    <Image
                      src="/img/about-grid/instagram11.jpeg"
                      alt="Image"
                      width={295}
                      height={246}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 p-0">
                  <div className="about-grid-img mb-0">
                    <Image
                      src="/img/about-grid/instagram22.jpeg"
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

export default About;
