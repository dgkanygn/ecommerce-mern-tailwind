import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { addFav, getByIdProduct } from "../requests/Product";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import Moment from "moment";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Product = () => {
  const { id } = useParams();
  const isLogin = useSelector((state) => state.login.value);
  const user = useSelector((state) => state.user.value);

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [product, setProduct] = useState();

  const { favCounter, setFavCounter } = useContext(DataContext);

  const getProduct = async () => {
    try {
      const res = await getByIdProduct(id);
      setProduct(res?.data?.product);
      // console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  const addFavFunc = async () => {
    try {
      const res = await addFav(product._id, { id: userInfo._id });
      console.log(res?.data);
      setFavCounter(res?.data?.userFavCounter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100/50 h-screen flex justify-center items-center">
        <div className="w-3/6">
          <div className=" bg-gray-100">
            <img
              className="w-95 h-80 m-auto"
              // style={{ width: 1000, height: 500 }}
              // src="https://picsum.photos/1000/500"
              src={`http://localhost:3001/${product?.productImage}`}
              alt=""
            />
          </div>

          <div className="bg-white p-5 shadow-md">
            <div className="flex items-center">
              <div className=" bg-gray-100 inline-block px-3 py-2 rounded text-gray-black mr-5 flex items-center">
                <i class="fa-solid fa-turkish-lira-sign"></i>
                <h1 className="font-bold ml-1">{product?.price}</h1>
              </div>
              <div className="flex items-center">
                <i class="fa-solid fa-location-dot"></i>
                <h1 className="ml-1 font-bold">
                  {product?.location || "Ankara"}
                </h1>
              </div>
              <br />
              <div className="flex items-center ml-5">
                <i class="fa-solid fa-tags"></i>
                <h1 className="font-bold ml-1">{product?.category}</h1>
              </div>

              <div className="flex items-center ml-5">
                <i class="fa-solid fa-clock"></i>
                <h1 className="font-bold ml-1">
                  {Moment(product?.createdAt).format("DD-MM-YYYY")}
                </h1>
              </div>
            </div>
            <br />
            <Link to={`/profile/${product?.owner}`}>
              <h1 className="text-lg flex items-center hover:underline cursor-pointer">
                <i class="fa-solid fa-user"></i>
                <h1 className="font-bold ml-1.5">{product?.owner}</h1>
              </h1>
            </Link>
            <br />
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <br />
            <p>{product?.description}</p>
            <br />
            {isLogin &&
              (user.username === product?.owner ? (
                <div className="flex">
                  {/* <PrimaryButton marginRight={1}>Düzenle</PrimaryButton> */}
                  <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
                    Düzenle
                  </button>
                  {/* <SecondaryButton fnc={2}>Kaldır</SecondaryButton> */}
                  <button className="border-2 border-red-600 px-3 py-1 rounded hover:bg-gray-100 text-red-600 font-bold">
                    Kaldır
                  </button>
                </div>
              ) : (
                <div className="flex">
                  {/* <PrimaryButton marginRight={1}></PrimaryButton> */}

                  <button
                    onClick={addFavFunc}
                    className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>

                  {/* <PrimaryButton>Görüşme Başlat</PrimaryButton> */}
                  <button className="border-2 border-red-600 px-3 py-1 rounded hover:bg-gray-100 text-red-600 font-bold">
                    Görüşme Başlat
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
