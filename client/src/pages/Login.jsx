import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
// import "/Login.css";

import { Link } from "react-router-dom";

import { useFormik } from "formik";

import { login } from "../requests/Auth";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../redux/slices/loginSlice";

const Login = () => {
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.login.value);

  const dispatch = useDispatch();

  <button onClick={() => dispatch(changeValue())}>Change</button>;

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      onSubmit: async (values) => {
        try {
          const res = await login(values);
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
          localStorage.setItem("token", JSON.stringify(res?.data?.token));
          // console.log(res.data);
          if (res.data) {
            dispatch(changeValue());
            navigate("/");
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      },

      // validationSchema: registerValidation,
    });

  if (isLogin) localStorage.setItem("isLogin", JSON.stringify(isLogin));

  return (
    <div className="flex justify-center items-center h-screen bg-sky-200">
      <div className="bg-gray-50 flex justify-center flex-col px-10 py-10 rounded shadow-md">
        <h1 className="text-center font-bold text-2xl ">LOGIN</h1>
        <br />
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            {/* <PrimaryButton type="submit">Login</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Login
            </button>
          </form>

          <br />

          <Link to="/register">
            <h1 className="text-center font-thin cursor-pointer hover:underline">
              Create New Account
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
