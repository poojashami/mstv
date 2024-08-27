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
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="banner-area jarallax"
        style={{ backgroundImage: `url(/img/banner/banner1.jpg)` }}
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
                    <h1>
                      JOIN <span style={{ color: "#ff0000" }}>MSTV</span> | HAR
                      PAL <span style={{ color: "#ff0000" }}>AAP K SATH</span>
                    </h1>
                    <p>
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
            src="/img/banner/banner2.jpg"
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
