import React from "react";
import Navbar from "../components/Navbar";
import ProductCategoryCard from "../components/ProductCategoryCard";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100/50 h-screen flex justify-center items-center">
        <div className="bg-white p-5 shadow-md w-1/25">
          <h1 className="font-bold text-3xl">Categories</h1>
          <br />
          <div className="flex flex-col">
            <ProductCategoryCard>Car</ProductCategoryCard>
            <br />
            <ProductCategoryCard>Phone</ProductCategoryCard>
            <br />
            <ProductCategoryCard>PC</ProductCategoryCard>
            <br />

            <ProductCategoryCard>Book</ProductCategoryCard>
            <br />

            <ProductCategoryCard>Book</ProductCategoryCard>
            <br />

            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
            <ProductCategoryCard>Book</ProductCategoryCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
