import React from "react";
import Link from "next/link";
import Image from "next/image";

const TeamMemberCard = () => {
  return (
    <>
      <div className="team-area-two ptb-100">
        <div className="container">
          <div className="section-title">
            <span style={{ color: "#ff0000" }}>Our Team</span>
            <h2>Meet The Team</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team1.jpg"
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
                  <h3>Phyllis Trimble</h3>
                  <span>Director, Producer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team2.jpg"
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
                  <h3>Lorna Smith</h3>
                  <span>Movie Editor</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team3.jpg"
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
                  <h3>ELDON B. RICE</h3>
                  <span>Movie Composer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team4.jpg"
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
                  <h3>MIKE TUCKER</h3>
                  <span>Cinematographer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team5.jpg"
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
                  <h3>EMMA WILSON</h3>
                  <span>Movie Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-team">
                <div className="team-img">
                  <Image
                    src="/img/team/team6.jpg"
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
                  <h3>EMMA WILSON</h3>
                  <span>Movie Director</span>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area text-center">
                <Link href="#" className="prev page-numbers">
                  <i className="bx bx-chevron-left"></i>
                </Link>

                <span className="page-numbers current">1</span>

                <Link href="#" className="page-numbers">
                  2
                </Link>

                <Link href="#" className="page-numbers">
                  3
                </Link>

                <Link href="#" className="page-numbers">
                  4
                </Link>

                <Link href="#" className="next page-numbers">
                  <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
