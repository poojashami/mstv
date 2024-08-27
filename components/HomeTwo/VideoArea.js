import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const VideoArea = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="video-created-area-two pb-100">
        <div className="container">
          <div className="video-created-wrap">
            <Image
              src="/img/video-created-img-2.jpg"
              alt="Image"
              width={1230}
              height={600}
            />

            <div className="video-wrap">
              <div onClick={() => setToggler(!toggler)} className="play-video">
                <i className="flaticon-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoArea;
