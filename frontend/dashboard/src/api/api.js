import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const api2 = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
const api3 = axios.create({
  baseURL: "https://api.escuelajs.co",
});

export default api;
export { api2, api3 };
