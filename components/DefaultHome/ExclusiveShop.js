import React from "react";
import Link from "next/link";
import AddToCart from "../Shop/AddToCart";
import Image from "next/image";

const ExclusiveShop = ({ products }) => {
  return (
    <>
      <div
        className="exclusive-shop-area ptb-100"
        style={{ backgroundImage: `url(/img/exclusive-shop-bg.jpg)` }}
      >
        <div className="container">
          <div className="section-title white-title">
            <span>Exclusive shop</span>
            <h2>Collect Your Movies Now!</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="exclusive-img">
                <Image
                  src="/img/exclusive-product-img-1.jpg"
                  alt="Image"
                  width={450}
                  height={450}
                />

                <div className="exclusive-img-2">
                  <Image
                    src="/img/exclusive-product-img-2.png"
                    alt="Image"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="exclusive-video-list">
                {products.slice(0, 4).map((product) => (
                  <div className="row align-items-center" key={product.id}>
                    <div className="col-lg-3">
                      <div className="exclusive-list-img">
                        <Link
                          href="/product/[id]"
                          as={`/product/${product.id}`}
                        >
                          <Image
                            src={product.image}
                            alt="Image"
                            width={285}
                            height={400}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-9">
                      <div className="exclusive-text">
                        <h3>
                          <Link
                            href="/product/[id]"
                            as={`/product/${product.id}`}
                          >
                            {product.title}
                          </Link>
                        </h3>
                        <span>
                          <del>${product.price}</del> ${product.price - 2}
                        </span>
                        <ul>
                          <li>Director: Peter Spider</li>
                          <li>Release: 01-01-2018</li>
                        </ul>

                        <AddToCart {...product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveShop;
