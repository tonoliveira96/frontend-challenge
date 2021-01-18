import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.eu",
});

export const apiPlaces = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
