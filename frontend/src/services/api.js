import axios from "axios";

const API = axios.create({
  baseURL:"https://kidrove-backend.onrender.com/api",
});

export default API;