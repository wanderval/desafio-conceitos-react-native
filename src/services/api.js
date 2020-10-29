import axios from "axios";

// baseURL must be changed with IP machine instead of localhost
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
