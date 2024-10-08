import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-area-two bg-color ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Vivi Bio</span>
                <h2>We Are A Creative Video Production Company</h2>
                <p>
                  Video production work with producing video content. It is the
                  analogical of film making, but the images are digitally
                  recorded instead of film stock. There are three levels of
                  video production: production, pre-production and
                  post-production the images are digitally recorded instead of
                  film stock producing
                </p>

                <Link href="/about" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <Image
                  src="/img/about-img-two.jpg"
                  alt="Image"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
