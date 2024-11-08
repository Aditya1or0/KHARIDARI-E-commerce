import React from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  if (!id || !image || !name || !price) {
    throw new Error("Product item is missing required properties");
  }
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt=""
        />
        <p className="pt-3 pb-1 text-sm dark:text-gray-300">{name}</p>
        <p className="font-medium text-sm dark:text-gray-300">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
