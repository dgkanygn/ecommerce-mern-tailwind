import React from "react";
import { addFavsProducts } from "../../requests/Product";

const PrimaryButton = ({ children, marginRight, func }) => {
  return (
    <button
      className={`bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-${marginRight} font-bold`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
