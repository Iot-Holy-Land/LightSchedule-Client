import axios from "axios";

export const server = axios.create({
  baseURL: "http://localhost",
  timeout: 10000,
});

export default server;
