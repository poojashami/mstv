import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

const SidebarModal = () => {
  const dispatch = useDispatch();
  const sidebarModal = useSelector((state) => state.sidebarModalState);

  // Sidebar Modal
  const toggleSidebarModal = () => {
    dispatch({
      type: "SIDEBAR_MODAL_STATE",
    });
  };

  return (
    <div className={`sidebar-modal ${sidebarModal ? "active" : ""}`}>
      <div className="sidebar-modal-inner">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link href="/">
              <Image
                src="/img/logomstv.png"
                alt="Image"
                width={90}
                height={33}
              />
            </Link>
          </div>

          <span
            className="close-btn sidebar-modal-close-btn"
            onClick={toggleSidebarModal}
          >
            <i className="bx bx-x"></i>
          </span>
        </div>

        <div className="sidebar-about">
          <div className="title">
            <p>
              MSTV is an online television channel solely designed to educate
              and entertain the masses around the globe by showcasing various
              short films, informative programs on varied topics and
              interactions with eminent people from walks of life hailing from
              varied parts of the world
            </p>
          </div>
        </div>

        <div className="contact-us">
          <h2>Contact Us</h2>

          <ul>
            <li>
              <i className="flaticon-pin"></i>
              <span>
                FC 14/15, Marwah Studios Complex, Film City,
                <br /> Noida, U.P., India
              </span>
            </li>

            <li>
              <i className="flaticon-email-1"></i>
              <a href="mailto:hello@vivi.com">info@mstv.co.in</a>
              {/* <a href="#">Skype: example</a> */}
            </li>

            <li>
              <i className="flaticon-phone-call"></i>
              <a href="tel:+1-587-785-4578">+91 458 654528</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-instagram-feed">
          <h2>Instagram</h2>

          <ul>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/instagram1.jpg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/instagram2.jpg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/instagram3.jpeg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/latestNews1.jpg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/newsandmedia.jpeg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/img/testimonial.jpeg"
                  alt="image"
                  width={88}
                  height={88}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-follow-us">
          <h2>Follow Us</h2>

          <ul className="social-wrap">
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/marwahstudios/"
                target="_blank"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mstvnoida" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@MarwahstudiosNoida"
                target="_blank"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;
