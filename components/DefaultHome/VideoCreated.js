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
        sources={["https://www.youtube.com/watch?v=4Khn2Yv-bt8"]}
      />

      <div
        className="video-created-area ptb-100"
        style={{ backgroundImage: `url(/img/video-created-bg.jpg)` }}
      >
        <div className="container">
          <div className="video-created-wrap">
            <Image
              src="/img/interview.jpg"
              alt="Image"
              width={1020}
              height={600}
            />

            <div className="video-wrap">
              <div onClick={() => setToggler(!toggler)} className="play-video">
                <i className="flaticon-play"></i>
              </div>
            </div>

            <h2>Special Guest Interviews</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCreated;
