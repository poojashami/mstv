import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const MaminBanner = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/4Jg4wplmsvk?autoplay=1&mute=1",
        ]}
      />

      <div
        className="banner-area jarallax"
        style={{ backgroundImage: `url(/img/banner/mstvBanner1.png)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-video">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-text">
                    {/* style={{ textAlign: "center" }} */}
                    <h1>
                      JOIN <span style={{ color: "#ff0000" }}>MSTV</span>
                    </h1>
                    <h1>
                      HAR PAL{" "}
                      <span style={{ color: "#ff0000" }}>AAP Ke SATH</span>
                    </h1>
                    <p className="slider_p">
                      Get connected with MSTV Limited that can provide your
                      every technology need to connect the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-img">
          <Image
            src="/img/banner/mstvBanner1.png"
            alt="Image"
            width={1290}
            height={870}
          />
        </div>
      </div>
    </>
  );
};

export default MaminBanner;
