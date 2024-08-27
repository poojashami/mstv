import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

const Content = ({ products }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id,
    });

    toast.error("Removed from cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  //to add the quantity
  const handleAddQuantity = (id) => {
    dispatch({
      type: "ADD_QUANTITY",
      id,
    });
  };
  //to substruct from the quantity
  const handleSubtractQuantity = (id) => {
    dispatch({
      type: "SUB_QUANTITY",
      id,
    });
  };
  return (
    <>
      <tbody>
        {products.length ? (
          products.map((product) => (
            <tr key={product.id}>
              <td className="product-thumbnail">
                <Link href="/product/[id]" as={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt="Image"
                    width={285}
                    height={400}
                  />
                </Link>
              </td>

              <td className="product-name">
                <Link href="/product/[id]" as={`/product/${product.id}`}>
                  {product.title}
                </Link>
              </td>

              <td className="product-price">
                <span className="unit-amount">${product.price}</span>
              </td>

              <td className="product-quantity">
                <div className="input-counter">
                  <span
                    className="minus-btn"
                    onClick={() => handleSubtractQuantity(product.id)}
                  >
                    <i className="bx bx-minus"></i>
                  </span>
                  <input
                    type="text"
                    value={product.quantity}
                    min="1"
                    max="10"
                    readOnly={true}
                    onChange={() => handleAddQuantity(product.quantity)}
                  />
                  <span
                    className="plus-btn"
                    onClick={() => handleAddQuantity(product.id)}
                  >
                    <i className="bx bx-plus"></i>
                  </span>
                </div>
              </td>

              <td className="product-subtotal">
                <span className="subtotal-amount">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>

                <a
                  className="remove"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemove(product.id);
                  }}
                >
                  <i className="bx bx-x"></i>
                </a>
              </td>
            </tr>
          ))
        ) : (
          <>
            <tr>
              <td colSpan="5">Empty</td>
            </tr>
          </>
        )}
      </tbody>
    </>
  );
};

export default Content;
