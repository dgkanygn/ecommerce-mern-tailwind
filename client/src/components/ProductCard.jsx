import React, { useContext } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";

import { Link, useLocation, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { addFav, addFavsProducts } from "../requests/Product";
import DataContext from "../context/DataContext";
import { useState } from "react";

const ProductCard = ({
  // product,
  // remove,
  // userProduct,
  id,
  title,
  productImage,
  price,
  // favorited,
}) => {
  const isLogin = useSelector((state) => state.login.value);
  const user = useSelector((state) => state.user.value);

  const { favCounter, setFavCounter } = useContext(DataContext);

  const userInf = JSON.parse(localStorage.getItem("user"));

  // console.log(favorited);

  // const { path } = useParams();

  const path = useLocation();

  // console.log(path.key);

  // console.log(user._id);

  // const isFavorited = favorited.includes(userInf._id);

  // console.log(isFavorited);

  const addFavFunc = async () => {
    try {
      const res = await addFav(id, { id: user._id });
      console.log(res?.data);
      // setIsFav(
      //   res?.data?.updated?.favorited.includes(userInf._id) ? false : true
      // );
      // console.log(isFav);
      setFavCounter(res?.data?.userFavCounter);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(favCounter);

  return (
    <div className="inline-block py-5 mr-5 mt-5 pt-0 shadow-md w-80">
      <div className="p-10 text-center">
        <Link to={`/product/${id}`}>
          <img
            // src="https://picsum.photos/300/200"
            src={`http://localhost:3001/${productImage}`}
            alt=""
            className="cursor-pointer w-46 h-36 m-auto object-cover"
          />
        </Link>
      </div>

      <div className="px-3 py-2 flex justify-between">
        <div>
          <h1 className="font-bold mb-1">{price} TL</h1>
          <Link to={`/product/${id}`}>
            <h1 className="cursor-pointer hover:underline inline-block">
              {title}
            </h1>
          </Link>
        </div>
        <div>
          {isLogin && (
            <>
              <button
                className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-${marginRight} font-bold"
                onClick={addFavFunc}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
