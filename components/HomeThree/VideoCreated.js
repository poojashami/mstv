import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const VideoCreated = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=7TvQUUQVwNU"]}
      />

      <div className="video-created-area-three bg-color-two pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 p-0">
              <div className="video-img">
                <Image
                  src="/img/video-created/thumnal.jpeg"
                  alt="Image"
                  width={520}
                  height={520}
                />

                {/* <h3>Video Created By Vivi</h3> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 p-0">
              <div className="video-wrap">
                <Image
                  src="/img/video-created/interview.jpeg"
                  alt="Image"
                  width={1020}
                  height={600}
                />

                <div
                  onClick={() => setToggler(!toggler)}
                  className="play-video"
                >
                  <i className="flaticon-play"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 p-0">
              <div className="video-img">
                <Image
                  src="/img/video-created/latestimage.jpg"
                  alt="Image"
                  width={520}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCreated;
