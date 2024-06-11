// frontend/src/api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});
axios.defaults.withCredentials = true;

export default instance;