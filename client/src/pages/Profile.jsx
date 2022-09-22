import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { getUser } from "../requests/User";
import { useState } from "react";
import { getAllProducts, getByOwnerProduct } from "../requests/Product";

const Profile = () => {
  const { username } = useParams();

  const [profile, setProfile] = useState([]);

  const [products, setProducts] = useState([]);

  const getProfile = async () => {
    try {
      const res = await getUser(username);
      setProfile(res?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  const usersProducts = async () => {
    try {
      const res = await getByOwnerProduct(username);
      // console.log(res?.data?.products);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    usersProducts();
  }, []);

  // console.log(profile);

  const user = useSelector((state) => state.user.value);
  const isLogin = useSelector((state) => state.login.value);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100/50 h-screen flex justify-center items-center">
        <div className="bg-white p-5 shadow-md w-1/25 mt-48">
          <h1 className="font-bold text-3xl">{profile?.username}</h1>
          <br />
          <p>{profile?.bio}</p>
          <br />
          <h1 className="font-bold ">Products ({profile?.products?.length})</h1>
          <br />
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product?.title}
              price={product?.price}
              productImage={product?.productImage}
              id={product?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
