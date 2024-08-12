import axios from "axios";

const fakeApi = "https://fakestoreapi.com";
// const test = "https://dummyjson.com/products";

const api = axios.create({
  baseURL: fakeApi, // Correct key is 'baseURL'
});

export default api;
