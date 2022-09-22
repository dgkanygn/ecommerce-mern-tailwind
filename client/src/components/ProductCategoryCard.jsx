import React from "react";

const ProductCategoryCard = ({ children }) => {
  return (
    <div className="border bg-red-600 inline-block px-10 py-5 rounded text-white cursor-pointer hover:bg-red-600/80 font-bold">
      {children}
    </div>
  );
};

export default ProductCategoryCard;
