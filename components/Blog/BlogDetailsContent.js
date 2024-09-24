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
            AAFT and ICMEI Celebrate 78th Independence Day with Patriotic Fervor
            at Noida Film City
          </h3>

          <p>
            Dr. Sandeep Marwah, Chancellor of AAFT University and President of
            ICMEI, led the celebrations with a stirring address. “We are
            fortunate to enjoy the freedoms and comforts of life, but let us not
            forget the brave men and women of our armed forces who guard our
            borders with unwavering dedication and without a single complaint.
            Today, we honor those who have shed their blood for the security of
            our nation and those who continue to serve, providing us with a
            peaceful and prosperous country,” Dr. Marwah stated, emphasizing the
            sacrifices made by the nation’s defenders.
          </p>

          <blockquote>
            <i className="flaticon-quote"></i>
            <p>
              Noida, India – August 15, 2024 – The 78th Independence Day of the
              Republic of India was celebrated with great enthusiasm and
              patriotism at Marwah Studios, Noida Film City. The event was
              organized by the International Chamber of Media and Entertainment
              Industry (ICMEI) in association with the Asian Academy of Film and
              Television (AAFT).
            </p>
          </blockquote>

          <p>
            The event featured heartfelt performances of patriotic songs by AAFT
            students and teachers, creating an emotional atmosphere that
            resonated with everyone present. The auditorium later came alive
            with vibrant music and dance, infusing the celebration with energy
            and enthusiasm.
          </p>
          <p>
            Dr. Marwah also shared his personal experiences, reflecting on his
            nine years of service as District Commandant in the Delhi Home
            Guards, where he led 12,000 jawans in various capacities. His
            commitment to the nation, both in and out of uniform, added a
            powerful dimension to the event’s proceedings.
          </p>
          <p>
            In a poignant moment, Dr. Marwah recounted the hardships his family
            faced during the partition of 1947, when they were displaced from
            Peshawar and endured severe suffering without food or shelter. His
            story served as a reminder of the resilience and strength that have
            shaped India’s journey to independence.
          </p>
          <p>
            The Independence Day celebration at Marwah Studios not only honored
            the past but also inspired a renewed sense of patriotism and
            responsibility among the attendees, especially the younger
            generation.
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
