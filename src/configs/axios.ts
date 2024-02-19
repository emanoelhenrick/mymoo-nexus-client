import axios from "axios";

export const nexus = axios.create({
  baseURL: 'http://127.0.0.1:10000'
})