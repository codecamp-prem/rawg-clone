import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3952e0c36a5b41c598c4a6dbdda1dfbe",
  },
});

export { CanceledError };
