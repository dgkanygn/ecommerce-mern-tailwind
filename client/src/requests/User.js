import axios from "axios";

export const getUser = (params) => {
  return axios.get(`http://localhost:3001/users/${params}`);
};
