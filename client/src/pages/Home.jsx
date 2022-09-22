import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductCategoryCard from "../components/ProductCategoryCard";
import img from "../images/img.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../requests/Product";
import { useState } from "react";
import { getAllCategories } from "../requests/Category";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const [products, setProducts] = useState([]);

  const isLogin = useSelector((state) => state.login.value);

  const { favorited, setFavorited, isFav, setIsFav } = useContext(DataContext);

  const [cats, setCats] = useState([]);

  const userInf = JSON.parse(localStorage.getItem("user"));

  const getProducts = async () => {
    try {
      const res = await getAllProducts();
      // console.log(res?.data);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  {
    // products.map((e) => e.favorited.map((fav) => console.log(fav)));
    products.map((e) => console.log(e.favorited.includes(userInf._id)));
  }

  const getAllCat = async () => {
    try {
      const res = await getAllCategories();
      // console.log(res?.data?.categories);
      setCats(res?.data?.categories);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(cats);

  useEffect(() => {
    getProducts();
    getAllCat();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="p-10 bg-red-100 flex justify-between items-center ">
        <img className="mt-10 w-2/4" src={img} alt="" />
        <div>
          <h1 className="font-bold lg:text-5xl sm:text-2xl pt-16 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            sint, fuga dolorem reiciendis ea explicabo!
          </h1>

          <br />
          <Link to="/register">
            {/* <PrimaryButton>Create New Account</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
      <div className="p-5">
        {isLogin && (
          <>
            <br />
            <Link to="/createProduct">
              {/* <PrimaryButton>Create Product</PrimaryButton> */}
              <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
                Create Product
              </button>
            </Link>
            <br />
            <br />
          </>
        )}
        <div className="flex">
          <h1 className="mb-3 font-bold ">Categories</h1>
          <Link to="/categories">
            <p className="ml-2 hover:underline cursor-pointer">See all</p>
          </Link>
        </div>

        {cats.map((cat, index) => (
          <Link key={index} to={`/categoryPage/${cat?.title}`}>
            <ProductCategoryCard>{cat?.title}</ProductCategoryCard>
          </Link>
        ))}
      </div>
      <div className="p-5">
        <h1 className="font-bold">Products</h1>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product?._id}
            productImage={product?.productImage}
            price={product?.price}
            title={product?.title}
            favorited={product?.favorited}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
