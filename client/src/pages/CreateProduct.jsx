import React from "react";
import { useState } from "react";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Navbar from "../components/Navbar";

import { useFormik } from "formik";
import { createProduct } from "../requests/Product";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const CreateProduct = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.value);

  const [productImage, setProductImage] = useState();

  const { handleSubmit, handleChange, handleBlur, touched, errors, values } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        price: "",
        location: "",
        category: "",
      },

      onSubmit: async (values) => {
        try {
          const formData = new FormData();

          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("price", values.price);
          formData.append("location", values.location);
          formData.append("category", values.category);
          formData.append("productImage", productImage);
          formData.append("owner", user.username);

          const res = await createProduct(formData);
          console.log(res?.data);
          if (res.data) navigate("/");
        } catch (error) {
          console.log(error);
        }
      },

      // validationSchema: registerValidation,
    });

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100/50 h-screen flex justify-center items-center">
        <div className="bg-white p-5 shadow-md w-1/25">
          <h1 className="font-bold text-3xl">Create</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <label htmlFor="">Price</label>
            <input
              type="text"
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <label htmlFor="">Description</label>
            <textarea
              rows={5}
              className="border border-gray-500 rounded inline-block w-full mt-1 px-1"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            <br />
            <select
              name="location"
              className="border border-gray-500 rounded block p-1"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Choose a location</option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
            </select>
            <br />
            <select
              className="border border-gray-500 rounded block p-1"
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Choose a category</option>
              <option value="Electric">Electronic</option>
              <option value="Car">Car</option>
              <option value="Hobby">Hobby</option>
              <option value="Baby">Baby</option>
              <option value="Clothes">Clothes</option>
              <option value="Spor">Spor</option>
              <option value="Home">Home</option>
              <option value="Vehicle">Vehicle</option>
              <option value="School">School</option>
              <option value="Food">Food</option>
            </select>
            <br />
            <label htmlFor="">Image</label>
            <input
              className="block mt-1"
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
            />
            <br />
            {/* <PrimaryButton>Create</PrimaryButton> */}
            <button className="bg-red-600 px-4 py-1.5 rounded text-white hover:bg-red-600/80 mr-1 font-bold">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
