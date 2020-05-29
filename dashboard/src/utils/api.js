import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  timeout: 3 * 60 * 1000,
  validateStatus: function (status) {
    return status < 400;
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 400 && error?.response?.data?.data?.mensagem) {
      console.log({ error });
    }
    return Promise.reject(error);
  }
);

export default API;
