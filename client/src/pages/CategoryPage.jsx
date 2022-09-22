import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductCategoryCard from "../components/ProductCategoryCard";

import { useParams } from "react-router-dom";
import { getByCategory } from "../requests/Product";
import { useEffect } from "react";
import { useState } from "react";

const CategoryPage = () => {
  const params = useParams();

  const [products, setProducts] = useState([]);

  const getByCat = async () => {
    try {
      const res = await getByCategory(params.category);
      setProducts(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getByCat();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100/50 h-screen flex justify-center items-center p-5">
        <div className="bg-white p-5 shadow-md w-1/25">
          <h1 className="font-bold text-3xl">{params.category}</h1>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product?.title}
              productImage={product?.productImage}
              price={product?.price}
              id={product?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
