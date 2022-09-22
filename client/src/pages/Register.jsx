import React from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";

import { Link } from "react-router-dom";

import { useFormik } from "formik";

import { register } from "../requests/Auth";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        bio: "",
      },

      onSubmit: async (values) => {
        try {
          const res = await register(values);
          console.log(res.data);
          if (res.data) navigate("/");
        } catch (error) {
          console.log(error);
        }
      },

      // validationSchema: registerValidation,
    });

  return (
    <div className="flex justify-center items-center h-screen bg-sky-200">
      <div className="bg-gray-50 flex justify-center flex-col px-10 py-10 rounded shadow-md">
        <h1 className="text-center font-bold text-2xl ">REGISTER</h1>
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
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="username"
              value={values.username}
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

            <label htmlFor="">Password Confirm</label>
            <input
              type="password"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
            />
            <br />
            <br />
            <label htmlFor="">Bio</label>
            <textarea
              rows={5}
              type="text"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="bio"
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <br />
            <br />
            {/* <PrimaryButton type="submit">Register</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Register
            </button>
          </form>

          <br />

          <Link to="/login">
            <h1 className="text-center font-thin cursor-pointer hover:underline">
              Do you have an account? Login.
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
