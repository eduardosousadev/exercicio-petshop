import axios from "axios";

export default function api() {
  const baseURL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://exercicio-petshop-api-fake.onrender.com"
  ;
  return axios.create({
    baseURL
  })
}