

import axios from "axios";

const API = axios.create({
  baseURL: "https://kidrove-workshop-assignment.onrender.com/api",
});

export default API;