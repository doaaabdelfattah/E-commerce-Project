import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const api2 = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default api;
export { api2 };
