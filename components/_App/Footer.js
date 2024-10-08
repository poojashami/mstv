import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    toast.success("Thank you for subscribing!");
    setEmail("");
  };
  return (
    <>
      <footer className="footer-top-area">
        <div className="container-fluid">
          <div
            className="row "
            style={{ border: "2px solid #fff", padding: "20px 5px 0px 5px" }}
          >
            <div className="col-lg-3 col-md-6">
              <div className="single-widget bg-white whitebg">
                <div className="logo-center">
                  <div className="logo " style={{ textAlign: "center" }}>
                    <Link href="#">
                      <Image
                        src="/img/logomstv.png"
                        alt="Image"
                        width={120}
                        height={40}
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ color: "white", marginBottom: "20px" }}>
                  <h6
                    style={{
                      marginBottom: "6px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    <i class="bx bx-mobile"></i> +91 458 654 528
                  </h6>
                  <h6
                    style={{
                      color: "black",
                      textAlign: "center",
                      textTransform: "lowercase",
                    }}
                  >
                    <i class="bx bx-envelope"></i> info@mstv.co.in
                  </h6>
                </div>
                <div className="newsletter-wrap">
                  <h3 style={{ color: "#000", textAlign: "center" }}>
                    Subscribe Newsletter
                  </h3>
                  <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button className="send-btn" type="submit">
                      <i className="bx bx-right-arrow-alt"></i>
                    </button>
                  </form>
                  <ToastContainer />
                </div>
                <ul className="social-wrap style-center">
                  <li>
                    <a href="#" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/marwahstudios/"
                      target="_blank"
                    >
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/mstvnoida"
                      target="_blank"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@MarwahstudiosNoida"
                      target="_blank"
                    >
                      <i class="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="single-widget">
                    <h3>Useful Links</h3>
                    <ul className="address">
                      <li>
                        <Link href="/about-us/">About US</Link>
                      </li>
                      <li>
                        <Link href="/our-programs/">Our Programs</Link>
                      </li>
                      <li>
                        <Link href="/videos/">MSTV Videos</Link>
                      </li>
                      <li>
                        <Link href="/testimonials/">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/news-and-media/">News & Media</Link>
                      </li>
                      <li>
                        <Link href="/awardsAndAccolades/">
                          Award / Accolades
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="single-widget">
                    <h3>Highlights</h3>
                    <ul className="additional-link">
                      <li>
                        <Link href="/roobaroo">Rubaroo</Link>
                      </li>
                      <li>
                        <Link href="/bharatKiKhoj">Bharat ki Punar Khoj</Link>
                      </li>
                      <li>
                        <Link href="/theRealTalk">The Real Talk</Link>
                      </li>
                      <li>
                        <Link href="/kalaSangam">Kala Sangam</Link>
                      </li>
                      <li>
                        <Link href="/healYourLife">Heal Your Life</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Instagram</h3>
                <ul className="instagram">
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/instagram1.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/instagram2.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/latestNews1.jpg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/instagram3.jpeg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/newsandmedia.jpeg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/img/testimonial.jpeg"
                        alt="Image"
                        width={88}
                        height={88}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer-bottom-area">
        <div className="container">
          <div className="copyright-wrap">
            <p >
              All rights reserved @ 2024{" "}
              <a href="/" style={{ cursor: "pointer", color: "#0044CC" }}>
                MSTV
              </a>
              . Designed and Developed by{" "}
              <a
                href="https://indicorpit.com/"
                target="blank"
                style={{ cursor: "pointer", color: "#0044CC" }}
              >
                IndiCorp IT Solutions Pvt Ltd
              </a>
              {/* <a href="https://envytheme.com/" target="blank">EnvyTheme</a>  */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
