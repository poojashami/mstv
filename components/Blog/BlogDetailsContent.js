import React from "react";
import Link from "next/link";
import Comments from "./Comments";
import Image from "next/image";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-wrap pb-4">
        <div className="blog-top-content-wrap pb-4">
          <Image
            src="/img/blog-details/details-img.png"
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

          <h3>
            Swapnil Rai Presents “Networked Bollywood” to Sandeep Marwah at
            Marwah Studios
          </h3>

          <p>
            Dr. Sandeep Marwah expressed his profound appreciation for Dr. Rai’s
            rigorous research and dedication to the project. “I am happy to be
            part of this journey. I remember how Swapnil spent hours and hours
            collecting information connected to Bollywood, and I did not
            hesitate to share information for this great research, which has now
            been beautifully converted into a book. I congratulate Swapnil on
            this remarkable achievement and wish her great success,” said Dr.
            Marwah while accepting a copy of the book from Dr. Rai.
          </p>

          <blockquote>
            <i className="flaticon-quote"></i>
            <p>
              Noida, 21st August 2024 – Dr. Swapnil Rai, is an Assistant
              Professor in the Department of Film, Television, and Media at the
              University of Michigan, Ann Arbor, USA, presented her newly
              published book “Networked Bollywood: How Star Power Globalized
              Hindi Cinema” to Dr. Sandeep Marwah, President of Marwah Studios
              and Chancellor of AAFT University, in a special ceremony at Marwah
              Studios, Noida. The event was marked by a warm exchange of ideas
              and mutual admiration between the author and the celebrated media
              and film educationist.
            </p>
          </blockquote>

          <p>
            During her address, Dr. Swapnil Rai shared her deep passion and
            insights into the complex connections between Bollywood stars and
            the global entertainment industry. Her interdisciplinary
            scholarship, which meticulously examines the pivotal role of stars
            in Bollywood’s globalization through extensive research and cultural
            analysis, has been widely praised for its depth and accessibility.
          </p>
          <p>
            “Networked Bollywood” provides a comprehensive exploration of the
            various phases of Hindi cinema’s history, highlighting the key
            transformations influenced by significant historical events such as
            colonialism, independence, the Cold War, and the liberalization of
            the Indian economy. Dr. Rai argues that Bollywood’s global reach is
            not a recent phenomenon but rather a historical continuum, with its
            globalization origins tracing back through several decades of Hindi
            cinema.
          </p>
          <p>
            The event underscored the significance of academic contributions to
            the understanding of global cinema and the role of Bollywood in
            shaping cultural narratives worldwide. Dr. Rai’s work is set to
            become an essential resource for scholars, students, and anyone
            interested in the evolution of Hindi cinema and its international
            impact.
          </p>
          <p>
            The occasion was a testament to the collaborative spirit between
            academia and the film industry, fostering a deeper appreciation of
            the cultural and historical forces that continue to shape the global
            entertainment landscape. The event was supported by Indo American
            Film and Cultural Forum.
          </p>
        </div>
        {/* 
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
        </div> */}

        {/* Comments & Comments Form */}
        <Comments />
      </div>
    </>
  );
};

export default BlogDetailsContent;
