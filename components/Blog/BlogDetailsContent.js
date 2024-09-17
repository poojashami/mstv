import React from "react";
import Link from "next/link";
import Comments from "./Comments";
import Image from "next/image";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-wrap">
        <div className="blog-top-content-wrap">
          <Image
            src="/img/blog-details/details-img.jpg"
            alt="Image"
            width={810}
            height={470}
          />

          <ul className="post-details">
            <li>
              <i className="bx bx-user"></i>
              By Admin
            </li>
            <li>
              <i className="bx bx-calendar"></i>
              06/21/2023
            </li>
            <li>
              <i className="bx bx-comment"></i>
              No Comments
            </li>
          </ul>

          <h3>Videojjgjkg Production Services Your Business Must Have</h3>

          <p>
            MSTV is not just about entertainment; it's also a source of
            knowledge and enlightenment. The channel's thought-provoking
            documentaries delve into various subjects, from history and science
            to culture and society. These documentaries provide viewers with
            valuable insights and perspectives, fostering a sense of curiosity
            and understanding about the world around them.
          </p>

          <p>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accus amet justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet justo duo dolores.
          </p>

          <blockquote>
            <i className="flaticon-quote"></i>
            <p>
              MSTV is not just about entertainment; it's also a source of
              knowledge and enlightenment. The channel's thought-provoking
              documentaries delve into various subjects, from history and
              science to culture and society. These documentaries provide
              viewers with valuable insights and perspectives, fostering a sense
              of curiosity and understanding about the world around them.
            </p>
          </blockquote>

          <p>
            MSTV is not just about entertainment; it's also a source of
            knowledge and enlightenment. The channel's thought-provoking
            documentaries delve into various subjects, from history and science
            to culture and society. These documentaries provide viewers with
            valuable insights and perspectives, fostering a sense of curiosity
            and understanding about the world around them.
          </p>
        </div>

        <div className="tags-and-shear-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <ul className="tag-list">
                <li>
                  <span>Tags:</span>
                </li>
                <li>
                  <Link href="#">Actir</Link>
                </li>
                <li>
                  <Link href="#">Cinema</Link>
                </li>
                <li>
                  <Link href="#">Director</Link>
                </li>
                <li>
                  <Link href="#">Production</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-5">
              <ul className="social-wrap">
                <li>
                  <span>Follow Us:</span>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="post-next-and-prev-wrap">
          <div className="row">
            <div className="col-6">
              <div className="prev-img">
                <Link href="#">
                  <Image
                    src="/img/blog-details/prev-img.jpg"
                    alt="Image"
                    width={105}
                    height={98}
                  />
                  <h3>Prev Post</h3>
                </Link>
              </div>
            </div>

            <div className="col-6">
              <div className="next-img">
                <Link href="#">
                  <Image
                    src="/img/blog-details/next-img.jpg"
                    alt="Image"
                    width={105}
                    height={98}
                  />
                  <h3>Next Post</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Comments & Comments Form */}
        <Comments />
      </div>
    </>
  );
};

export default BlogDetailsContent;
