import React from "react";
import Image from "next/image";

const TeamStyleTwo = () => {
  return (
    <>
      <div className="team-area-two pt-100 pb-70">
        <div className="container">
          <div className="section-title white-title">
            <span style={{ color: "black" }}>Our Team</span>
            <h2 style={{ color: "black" }}>Meet The Team</h2>
          </div>

          <div className="row">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
