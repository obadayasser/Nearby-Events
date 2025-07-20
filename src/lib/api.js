import axios from "axios";

const api = axios.create({
  baseURL: "https://687cf39d918b642243309164.mockapi.io/api/nearby", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
