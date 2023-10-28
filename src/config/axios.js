import axios from "axios";

console.log(process.env.URL)

const axiosInstance = axios.create({
    baseURL: process.env.URL
})

export default axiosInstance;