import React, { useState, useRef } from "react";
import Image from "next/image";

const AuthorSection = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Middle image by default
  const containerRef = useRef(null);

  // Define inline styles
  const containerStyle = {
    paddingTop: "100px",
    paddingBottom: "70px",
    backgroundImage: "url(/img/team-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflowX: "auto",
    whiteSpace: "nowrap",
    scrollBehavior: "smooth",
  };

  const sectionTitleStyle = {
    color: "white",
    marginBottom: "40px",
    textAlign: "center",
  };

  const titleSpanStyle = {
    color: "#ff0000",
  };

  const titleStyle = {
    fontSize: "36px",
    margin: "0",
    color: "white",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const imageWrapperStyle = (index) => ({
    width: index === activeIndex ? "250px" : "150px",
    height: index === activeIndex ? "300px" : "200px",
    transition: "transform 0.6s ease, z-index 0.3s ease",
    transform: index === activeIndex ? "rotate(360deg)" : "none", // Rotation animation
    zIndex: index === activeIndex ? 1 : 0,
    display: "inline-block",
    margin: "0 10px",
    cursor: "pointer",
  });

  const middleImageStyle = {
    width: "100%",
    height: "auto",
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);

    // Scroll to the center of the clicked image
    const container = containerRef.current;
    const imageWidth = container.scrollWidth / 5; // Assuming 5 images
    container.scrollLeft =
      imageWidth * index - container.clientWidth / 2 + imageWidth / 2;
  };

  return (
    <section style={containerStyle} ref={containerRef}>
      <div style={sectionTitleStyle}>
        <span style={titleSpanStyle}>Our Founder</span>
        <h2 style={titleStyle}>The Founder</h2>
      </div>
      <div style={imageContainerStyle}>
        {[
          { src: "/img/team/akshay.png", alt: "Image 1" },
          { src: "/img/team/harsh.png", alt: "Image 2" },
          { src: "/img/team/marwah.png", alt: "Middle Image" },
          { src: "/img/team/shubham.png", alt: "Image 4" },
          { src: "/img/team/sushil.png", alt: "Image 5" },
        ].map((image, index) => (
          <div
            key={index}
            style={imageWrapperStyle(index)}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={index === activeIndex ? 250 : 150}
              height={index === activeIndex ? 300 : 200}
              style={middleImageStyle}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorSection;
