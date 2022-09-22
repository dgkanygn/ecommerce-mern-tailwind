import axios from "axios";

export const createProduct = (data) => {
  return axios.post(`http://localhost:3001/create`, data);
};

export const getAllProducts = () => {
  return axios.get(`http://localhost:3001/products`);
};

export const getByIdProduct = (params) => {
  return axios.get(`http://localhost:3001/products/${params}`);
};

export const addFavsProducts = (params, body) => {
  return axios.put(`http://localhost:3001/products/${params}`, body);
};

export const getByOwnerProduct = (params) => {
  return axios.get(`http://localhost:3001/products/find/${params}`);
};

export const getUserFav = (params) => {
  return axios.get(`http://localhost:3001/products/getFav/${params}`);
};

export const addFav = (params, body) => {
  return axios.put(`http://localhost:3001/products/addFav/${params}`, body);
};

export const getByCategory = (params) => {
  return axios.get(`http://localhost:3001/products/getByCategory/${params}`);
};
