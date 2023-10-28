import axiosInstance from "../config/axios"

const getUser = () => {
    return axiosInstance.get('/usuarios')
}

export {
    getUser
}