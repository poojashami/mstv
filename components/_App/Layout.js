import React from "react";
import Head from "next/head";
import { ToastContainer, Slide } from "react-toastify";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MSTV - Har Pal Aap K Sath</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      <GoTop />

      <ToastContainer transition={Slide} />
    </>
  );
};

export default Layout;
