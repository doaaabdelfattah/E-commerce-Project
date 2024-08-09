import axios { axios } from 'axios';

const test = 'https://dummyjson.com/products'
const baseUrl = axios.create({
  baseUrl: test
});

export default baseUrl;