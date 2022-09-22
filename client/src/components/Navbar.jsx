import React, { useContext } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { changeValue } from "../redux/slices/loginSlice";
import DataContext from "../context/DataContext";
import { getUser } from "../requests/User";
import { useEffect } from "react";
import { getUserFav } from "../requests/Product";

const Navbar = () => {
  const isLogin = useSelector((state) => state.login.value);
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  const { userInfo } = useContext(DataContext);
  const { favCounter, setFavCounter } = useContext(DataContext);

  const userData = JSON.parse(localStorage.getItem("user"));

  // console.log(userInfo.favs.length);

  // const [favCounter, setFavCounter] = useState();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    // setTimeout(() => window.location.reload(), 1000);
    window.location.reload();
    dispatch(changeValue());
  };

  // const getUserFnc = async () => {
  //   try {
  //     const res = await getUser(userInfo.username);
  //     // console.log(res?.data.user?.favs?.length);
  //     // setFavCounter(res?.data.user?.favs?.length);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getFavs = async () => {
    try {
      const res = await getUserFav(userData._id);
      // setFavs(res?.data?.favs);
      // console.log(res?.data);
      setFavCounter(res?.data?.favs?.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getUserFnc();
    getFavs();
  }, [favCounter]);

  // console.log(favCounter);

  // console.log(favs);

  // useEffect(() => {
  //   getFavs();
  // }, []);

  // console.log(favCounter);

  // console.log(isLogin);

  // const [isLogin, setIsLogin] = useState(true);

  // const logout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("isLogin");
  //   // setTimeout(() => window.location.reload(), 1000);
  //   window.location.reload();
  //   dispatch(changeValue());
  // };

  return (
    <div className="flex justify-between border-b py-5 px-5 fixed w-full z-50 bg-white shadow-md">
      <div className="navbar-left">
        <Link to="/">
          <h1 className="text-3xl font-medium cursor-pointer font-bold">
            commerce
          </h1>
        </Link>
      </div>

      {/* {console.log(user.favs.length)} */}

      {/* <button onClick={() => dispatch(changeValue())}>Change</button> */}

      {isLogin && (
        <div className="flex">
          <Link to={`/profile/${user.username}`}>
            {/* <PrimaryButton marginRight={1}>{user.username}</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              {user.username}
            </button>
          </Link>

          <Link to="/favorites">
            {/* <PrimaryButton>Favs (0)</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Favs ({favCounter})
            </button>
          </Link>

          {/* <SecondaryButton fnc={1}>Çıkış</SecondaryButton> */}
          <button
            className="border-2 border-red-600 px-3 py-1 rounded hover:bg-gray-100 text-red-600 font-bold"
            onClick={logout}
          >
            Çıkış
          </button>
        </div>
      )}

      {!isLogin && (
        <div className="navbar-right flex items-center">
          <Link to="/login">
            {/* <PrimaryButton marginRight={1}>Login</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Login
            </button>
          </Link>

          <Link to="register">
            {/* <SecondaryButton>Register</SecondaryButton> */}
            <button className="border-2 border-red-600 px-3 py-1 rounded hover:bg-gray-100 text-red-600 font-bold">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
