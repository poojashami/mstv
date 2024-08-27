import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-area ptb-100" style={{ paddingBottom: "150px" }}>
        <div className="container">
          <div
            className="about-content-wrap"
            style={{ backgroundImage: `url(/img/frontpage2.jpg)` }}
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="about-content">
                  <span style={{ color: "#ff0000" }}>MSTV Journey</span>
                  <h2>
                    MSTV : Journey to Unite the World Through Art & Culture
                  </h2>
                  <h5>Cultural Exchange Beyond Boundaries:</h5>
                  <p>
                    MSTV is more than just a spectator; it's an active
                    participant in fostering cultural exchange. The channel
                    facilitates conversations, collaborations, and interactions
                    that promote a deeper understanding of various cultures.
                    Through interviews, documentaries, and live events, MSTV
                    brings artists, creators, and thinkers together, enabling
                    them to share their insights, stories, and visions with a
                    global audience.
                  </p>
                  <h5>Empowering Voices, Amplifying Stories:</h5>
                  <p>
                    At the heart of MSTV's mission is the empowerment of voices
                    that often go unheard.
                  </p>
                  <h5>Celebrating Diversity, Building Bridges:</h5>
                  <p>
                    MSTV's commitment to unifying the world is rooted in its
                    celebration of diversity
                  </p>
                  <Link href="/about" className="default-btn">
                    Know More
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about-img">
                  <Image
                    src="/img/frontpage2.jpg"
                    alt="Image"
                    width={810}
                    height={522}
                  />
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
