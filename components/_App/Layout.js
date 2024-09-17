import React from "react";
import Head from "next/head";
import { ToastContainer, Slide } from "react-toastify";
import GoTop from "./GoTop";
import Whatsapp from "./Whatsapp";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MSTV - Har Pal Aap Ke Sath</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      <GoTop />
      <Whatsapp />
      <div className="go-our-ott">
        <button className="our-ott-btn"> Our OTT</button>
      </div>

      <ToastContainer transition={Slide} />
    </>
  );
};

export default Layout;
