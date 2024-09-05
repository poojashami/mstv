import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogSidebar = () => {
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

        <div className="popular-post-wrap sidebar-widget">
          <h3>Popular Post</h3>
          <ul>
            <li>
              <Link href="/blog-details">
                <Image
                  src="/img/portfolio/mqdefault3.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Roobaroo</h3>
                <span>June 27, 2023</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <Image
                  src="/img/portfolio/mqdefault1.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>Bharat ki Khoj</h3>
                <span>June 26, 2023</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <Image
                  src="/img/portfolio/mqdefault2.jpg"
                  alt="Image"
                  width={180}
                  height={100}
                />
                <h3>The Real Talk</h3>
                <span>June 26, 2023</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="categories-wrap sidebar-widget">
          <h3>Categories</h3>

          <ul>
            <li>
              <Link href="/blog-grid">Upcoming News</Link>
            </li>
            <li>
              <Link href="/blog-grid">Roobaroo</Link>
            </li>
            <li>
              <Link href="/blog-grid">Bharat ki Khoj</Link>
            </li>
            <li>
              <Link href="/blog-grid">The Real Talk</Link>
            </li>
            <li>
              <Link href="/blog-grid">Kala Sangam</Link>
            </li>
            <li>
              <Link href="/blog-grid">Heal Your Life</Link>
            </li>
            <li>
              <Link href="/blog-grid">Film</Link>
            </li>
            <li>
              <Link href="/blog-grid">Video</Link>
            </li>
          </ul>
        </div>

        <div className="about-wrap sidebar-widget">
          <h3>About</h3>
          <Image
            src="/img/news/news1.jpg"
            alt="Image"
            width={360}
            height={200}
          />
          <p>
            MSTV is an online television channel solely designed to educate and
            entertain the masses around the globe by showcasing various short
            films, informative programs on varied topics and interactions with
            eminent people from walks of life hailing from varied parts of the
            world
          </p>
        </div>

        <div className="tags-wrap sidebar-widget">
          <h3>Tags</h3>

          <ul>
            <li>
              <Link href="/blog-grid">Actor</Link>
            </li>
            <li>
              <Link href="/blog-grid">Film Production</Link>
            </li>
            <li>
              <Link href="/blog-grid">Cinema</Link>
            </li>
            <li>
              <Link href="/blog-grid">Movie</Link>
            </li>
            <li>
              <Link href="/blog-grid">Director</Link>
            </li>
            <li>
              <Link href="/blog-grid">Entertainment</Link>
            </li>
            <li>
              <Link href="/blog-grid">Awarded</Link>
            </li>
            <li>
              <Link href="/blog-grid">Production</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
