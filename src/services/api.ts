import axios from "axios";

export const api = axios.create({
  baseURL: "https://links.papareact.com/",
});
