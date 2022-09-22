import axios from "axios";

export const register = (data) => {
  return axios.post(`http://localhost:3001/register`, data);
};

export const login = (data) => {
  return axios.post(`http://localhost:3001/login`, data);
};
