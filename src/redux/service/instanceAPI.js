import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://6567153e64fcff8d730fb353.mockapi.io/api/v1/',
});