import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:4001/data",
  headers: {
    "Content-type": "application/json"
  }
});