import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import DataContext from "../context/DataContext";
import { addFavsProducts, getUserFav } from "../requests/Product";

const Favorites = () => {
  const userID = JSON.parse(localStorage.getItem("user"));

  const { favCounter, setFavCounter } = useContext(DataContext);

  const [favs, setFavs] = useState([]);

  const getFavs = async () => {
    try {
      const res = await getUserFav(userID._id);
      setFavs(res?.data?.favs);
      setFavCounter(res?.data?.favs?.length);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(favCounter);

  // console.log(favs);

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="bg-gray-100/50 h-screen flex justify-center items-center">
        <div className="bg-white p-5 shadow-md w-1/25">
          <h1 className="font-bold text-3xl">Favorites</h1>
          <br />
          {/* <PrimaryButton>
            <i class="fa-regular fa-trash-can"></i> Remove All
          </PrimaryButton> */}
          <br />
          {favs.map((fav, index) => (
            <ProductCard
              key={index}
              id={fav?._id}
              title={fav?.title}
              price={fav?.price}
              productImage={fav?.productImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
