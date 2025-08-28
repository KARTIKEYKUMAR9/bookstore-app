import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4001", // ✅ coming from .env
  withCredentials: true, // needed if using cookies/sessions
});
export default API;
