import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_INVERA;

export const inveraApi = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
