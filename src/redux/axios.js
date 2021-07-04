import axios from "axios";
const api = "http://localhost:5000/api/";
const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  // headers: {
  //   Authorization: token ? `Bearer ${token}` : "",
  // },
});

export default axiosInstance;
