import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const api2 = axios.create({
  baseURL: "localhost:5000/",
});

export default api;
export { api2 };
