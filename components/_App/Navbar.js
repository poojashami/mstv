import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import SidebarModal from "./SidebarModal";
import Image from "next/image";

const Navbar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.addedItems);
  const collapsed = useSelector((state) => state.collapsedState);
  const [input, setInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  const toggleNavbar = () => {
    dispatch({
      type: "COLLAPSED_STATE",
    });
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Sidebar Modal
  const toggleSidebarModal = () => {
    dispatch({
      type: "SIDEBAR_MODAL_STATE",
    });
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/img/logomstv.png"
                  alt="logo"
                  width={90}
                  height={33}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home One
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index2/"
                          className={`nav-link ${
                            currentPath == "/index2/" && "active"
                          }`}
                        >
                          Home Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/index3/"
                          className={`nav-link ${
                            currentPath == "/index3/" && "active"
                          }`}
                        >
                          Home Three
                        </Link>
                      </li>
                    </ul> */}
                  {/* </li> */}
                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/our-programs/"
                      className={`nav-link ${
                        currentPath == "/our-programs/" && "active"
                      }`}
                    >
                      Our Programs
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Our Program <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/testimonials/"
                          className={`nav-link ${
                            currentPath == "/testimonials/" && "active"
                          }`}
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Portfolio <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/portfolio-columns-two/"
                              className={`nav-link ${
                                currentPath == "/portfolio-columns-two/" &&
                                "active"
                              }`}
                            >
                              Portfolio Columns Two
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/portfolio-columns-three/"
                              className={`nav-link ${
                                currentPath == "/portfolio-columns-three/" &&
                                "active"
                              }`}
                            >
                              Portfolio Columns Three
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/videos/"
                              className={`nav-link ${
                                currentPath == "/videos/" && "active"
                              }`}
                            >
                              Portfolio Columns Four
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/portfolio-details/"
                              className={`nav-link ${
                                currentPath == "/portfolio-details/" && "active"
                              }`}
                            >
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          User <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/my-account/"
                              className={`nav-link ${
                                currentPath == "/my-account/" && "active"
                              }`}
                            >
                              My Account
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/forgot-password/"
                              className={`nav-link ${
                                currentPath == "/forgot-password/" && "active"
                              }`}
                            >
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404/">404 Error Page</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/videos/"
                      className={`nav-link ${
                        currentPath == "/videos/" && "active"
                      }`}
                    >
                      Videos
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      MSTV Videos <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cart/"
                          className={`nav-link ${
                            currentPath == "/cart/" && "active"
                          }`}
                        >
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          className={`nav-link ${
                            currentPath == "/checkout/" && "active"
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/product/5f05ab914875b805d9f87b09/"
                          className={`nav-link ${
                            currentPath ==
                              "/product/5f05ab914875b805d9f87b09/" && "active"
                          }`}
                        >
                          Product Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/testimonials/"
                      className={`nav-link ${
                        currentPath == "/testimonials/" && "active"
                      }`}
                    >
                      Testimonials
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Testimonial <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/our-programs/"
                          className={`nav-link ${
                            currentPath == "/our-programs/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-left-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog-left-sidebar/" && "active"
                          }`}
                        >
                          Blog Left Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog-right-sidebar/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/news-and-media/"
                      className={`nav-link ${
                        currentPath == "/news-and-media/" && "active"
                      }`}
                    >
                      News & Media
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      News & Media <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/our-programs/"
                          className={`nav-link ${
                            currentPath == "/our-programs/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-left-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog-left-sidebar/" && "active"
                          }`}
                        >
                          Blog Left Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blog-right-sidebar/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact US
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                  <input
                    className="form-control search-input"
                    name="search"
                    placeholder="SEARCH"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                  />
                  <button className="search-button" type="submit">
                    <i className="bx bx-search"></i>
                  </button>
                </form>

                {/* <div className="cart-icon">
                  <Link href="/cart/">
                    <i className="flaticon-shopping-cart"></i>
                    <span>{products.length}</span>
                  </Link>
                </div> */}

                <div className="menu-icon">
                  <div className="burger-menu" onClick={toggleSidebarModal}>
                    <i className="flaticon-menu-button"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <SidebarModal />
    </>
  );
};

export default Navbar;
