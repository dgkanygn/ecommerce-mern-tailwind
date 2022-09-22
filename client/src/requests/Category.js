import axios from "axios";

export const getAllCategories = () => {
  return axios.get(`http://localhost:3001/getAllCategories`);
};
