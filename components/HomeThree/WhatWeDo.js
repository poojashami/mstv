import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <>
      <section className="what-we-do-area three bg-color-two pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="what-we-do-content">
                <span style={{ color: "#ff0000" }}>What We Do</span>
                <h2>Annual Festivals at Marwah Studios</h2>
                <p>
                  Actively involved in the promotion of economic and social
                  development to promote Love, Peace and Unity through Global
                  Film Festival, Global Literary Festival, Global Festival of
                  Journalism, and other Art & Culture activities, thereby,
                  inspiring millions of people around the globe.
                </p>

                <div className="brand-wrap">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/journalism.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/journalism.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/globalFilm.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/globalFilm.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                      <div className="brand">
                        <Link href="#">
                          <Image
                            src="/img/cellphoneCinema.png"
                            alt="Image"
                            width={105}
                            height={80}
                          />

                          <div className="white-logo">
                            <Image
                              src="/img/cellphoneCinema.png"
                              alt="Image"
                              width={105}
                              height={80}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="default-btn three">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="what-we-do-item mt-30">
                    {/* <i className="flaticon-film-editing-1"></i> */}
                    <img
                      className="mb-30"
                      src="/img/globalFilm.png"
                      width="100"
                    />
                    <h3>Global Film Festival</h3>
                    <p>
                      Global Film Festival Noida is world’s biggest Film
                      Festival that celebrates the essence of Cinema with a
                      seamless convergence.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="what-we-do-item">
                    {/* <i className="flaticon-film-editing"></i> */}
                    <img
                      className="mb-30"
                      src="/img/journalism.png"
                      width="100"
                    />
                    <h3>Global Festival of Journalism</h3>
                    <p>
                      Journalism acts as the strongest weapon which can change
                      the world.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="what-we-do-item">
                    {/* <i className="flaticon-advertising"></i> */}
                    <img
                      className="mb-30"
                      src="/img/cellphoneCinema.png"
                      width="100"
                    />
                    <h3>INTERNATIONAL FESTIVAL FOR CELLPHONE CINEMA</h3>
                    <p>
                      In the modern times of digital technology, cell phone
                      functions as a full-fledged production centre.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="what-we-do-item mt-mince-30">
                    {/* <i className="flaticon-movie"></i> */}
                    <img
                      className="mb-30"
                      src="/img/designWeek.png"
                      width="100"
                    />
                    <h3>Global Fashion and Design Week</h3>
                    <p>
                      Global Fashion and Design Week has become an international
                      platform to launch new designers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
