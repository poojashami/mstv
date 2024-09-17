import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class AwardWinningMovies extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        {/* <div
          className="products-area three ptb-100 jarallax"
          style={{ paddingBottom: "150px" }}
        >
          <div className="container">
            <div className="section-title white-title">
              <span style={{ color: "#ff0000" }}>Achievement</span>
              <h2>Awards & Accolades</h2>
            </div>

            <div className="tab award-winning-tab">
              <ul className="tabs-nav">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}
                >
                  <span>2000</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  <span>2001</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab3")}>
                  <span>2002</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab4")}>
                  <span>2003</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab5")}>
                  <span>2004</span>
                </li>
              </ul>

              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab3" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab4" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab5" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className="products-area three ptb-100 jarallax"
          style={{ paddingBottom: "150px" }}
        >
          <div className="container">
            <div className="section-title white-title">
              <span style={{ color: "#ff0000" }}>Achievement</span>
              <h2>Awards & Accolades</h2>
            </div>

            <div className="tab award-winning-tab">
              <ul className="tabs-nav">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}
                >
                  <span>2000</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  <span>2001</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab3")}>
                  <span>2002</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab4")}>
                  <span>2003</span>
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab5")}>
                  <span>2004</span>
                </li>
              </ul>

              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          className="second_image"
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab3" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab4" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab5" className="tabs-item">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div
                        className="products"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src="/img/doc/Certificate-2022MM0032.jpg"
                          alt="Image"
                          width={300}
                          height={550}
                          style={{
                            display: "block",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                            border: "2px solid white",
                          }}
                        />
                        <Image
                          src="/img/doc/WR7-830x557.jpg"
                          alt="Second Image"
                          width={300}
                          height={550}
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "-150px",
                            border: "2px solid white",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="products-content">
                        <span style={{ color: "#ff0000" }}>MSTV</span>

                        <h2>Award Winning Movies “Document”</h2>
                        <p>
                          Video production work with producing video content. It
                          is the analogical of film making, but the images are
                          digitally recorded instead of film stock. There are
                          three levels of video production: production,
                          pre-production and post-production the images are.
                        </p>

                        <Link href="#" className="default-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media only screen and (max-width: 768px) {
            .products img {
              width: 100% !important; /* Make image responsive */
              height: auto !important;
            }

            .products img:nth-child(2) {
              position: absolute !important;
              right: 10px !important;
              bottom: -210px !important;
            }
          }
          @media only screen and (max-width: 767px) {
            .products-content {
              text-align: center;
              margin-top: 170px !important;
            }
            .products img:nth-child(2) .second_image {
              right: 10px !important;
              bottom: -205px !important;
            }
          }
        `}</style>
      </>
    );
  }
}

export default AwardWinningMovies;
