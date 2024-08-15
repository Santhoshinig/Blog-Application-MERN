// config.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/home", // Update this with your API's base URL
});
