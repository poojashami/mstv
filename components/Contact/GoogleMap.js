import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.024546883353!2d77.31550330000002!3d28.569025600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce446ae75823b%3A0x2abf2dd2c813438e!2sMarwah%20Studios!5e0!3m2!1sen!2sin!4v1725881890426!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
