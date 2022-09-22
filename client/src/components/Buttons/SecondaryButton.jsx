import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../../redux/slices/loginSlice";

const SecondaryButton = ({ children, fnc }) => {
  const isLogin = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    // setTimeout(() => window.location.reload(), 1000);
    window.location.reload();
    dispatch(changeValue());
  };

  const fonksiyon = () => {
    console.log("FONKSİYON 2");
  };

  const chooseFunc = () => {
    switch (fnc) {
      case 1:
        logout();
        break;
      case 2:
        fonksiyon();
        break;
    }
  };

  return (
    <div>
      <button
        onClick={chooseFunc}
        className="border-2 border-red-600 px-3 py-1 rounded hover:bg-gray-100 text-red-600 font-bold"
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
