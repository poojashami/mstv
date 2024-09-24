import React, { Component } from "react";
import Image from "next/image";

class AwardsAndAccolades extends Component {
  render() {
    return (
      <>
        <div
          className="products-area three ptb-100 jarallax"
          style={{ paddingBottom: "150px" }}
        >
          <div className="container">
            <div className="tab award-winning-tab">
              <div className="tab-content">
                {/* First Item */}
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="products" style={{ position: "relative" }}>
                      <Image
                        src="/img/doc/Certificate-2022MM0032.jpg"
                        alt="First Image"
                        width={300}
                        height={550}
                        style={{
                          display: "block",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          border: "4px solid white", // Ensure both images have borders
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
                          border: "4px solid white", // Apply border consistently
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="products-contentt"
                      style={{ color: "white" }}
                    >
                      <h2 style={{ color: "white" }}>
                        Award Winning “Document”
                      </h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production, and post-production the images are.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Item */}
                <div
                  className="row align-items-center"
                  style={{ marginTop: "200px" }}
                >
                  <div className="col-lg-6">
                    <div
                      className="products-contentt"
                      style={{ color: "white" }}
                    >
                      <h2 style={{ color: "white" }}>
                        Award Winning “Document”
                      </h2>
                      <p>
                        Video production work with producing video content. It
                        is the analogical of film making, but the images are
                        digitally recorded instead of film stock. There are
                        three levels of video production: production,
                        pre-production, and post-production the images are.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="products" style={{ position: "relative" }}>
                      <Image
                        src="/img/doc/Certificate-2022MM0032.jpg"
                        alt="First Image"
                        width={300}
                        height={550}
                        style={{
                          display: "block",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                          border: "4px solid white", // Ensure both images have borders
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
                          border: "4px solid white", // Apply border consistently
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Third Item (New Data) */}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media only screen and (max-width: 768px) {
            .products img {
              width: 100% !important;
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

export default AwardsAndAccolades;
