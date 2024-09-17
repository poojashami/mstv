import React from "react";
import Image from "next/image";

const Whatsapp = () => {
  const handleWhatsappClick = () => {
    // Replace the phone number below with your actual phone number, in international format.
    const phoneNumber = "1234567890"; // e.g., "919876543210" for India
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp with the specific URL
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatspp-btn" onClick={handleWhatsappClick}>
      <Image src="/img/whatsapp.png" alt="WhatsApp" width={50} height={50} />
    </div>
  );
};

export default Whatsapp;
