import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShopSidebar = () => {
  return (
    <>
      <div className="sidebar-wrap">
        <div className="search-wrap sidebar-widget">
          <form className="search-form">
            <input
              className="form-control"
              name="search"
              placeholder="SEARCH"
              type="text"
            />
            <button className="search-button" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        <div className="categories-wrap sidebar-widget">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link href="#">Upcoming movies</Link>
            </li>
            <li>
              <Link href="#">Blockbusters</Link>
            </li>
            <li>
              <Link href="#">Awarded</Link>
            </li>
            <li>
              <Link href="#">Festival</Link>
            </li>
            <li>
              <Link href="#">Trailer</Link>
            </li>
            <li>
              <Link href="#">Actors</Link>
            </li>
            <li>
              <Link href="#">Film</Link>
            </li>
            <li>
              <Link href="#">Video</Link>
            </li>
          </ul>
        </div>

        <div className="popular-post-wrap sidebar-widget">
          <h3>Popular Movies</h3>

          <ul>
            <li>
              <Link href="#">
                <Image
                  src="/img/blog-details/popular-img-1.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Tattoo life</h3>
                <span>$39</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <Image
                  src="/img/blog-details/popular-img-2.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Human faith</h3>
                <span>$29</span>
              </Link>
            </li>

            <li>
              <Link href="#">
                <Image
                  src="/img/blog-details/popular-img-3.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Alone journey</h3>
                <span>$49</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="tags-wrap sidebar-widget">
          <h3>Tags</h3>

          <ul>
            <li>
              <Link href="#">Actor</Link>
            </li>
            <li>
              <Link href="#">Film Production</Link>
            </li>
            <li>
              <Link href="#">Cinema</Link>
            </li>
            <li>
              <Link href="#">Movie</Link>
            </li>
            <li>
              <Link href="#">Director</Link>
            </li>
            <li>
              <Link href="#">Entertainment</Link>
            </li>
            <li>
              <Link href="#">Awarded</Link>
            </li>
            <li>
              <Link href="#">Production</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;
