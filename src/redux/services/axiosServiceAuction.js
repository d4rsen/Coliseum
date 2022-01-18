import axios from 'axios'

export const DB_URL = 'https://dbforgame.herokuapp.com/auction'

const $apiAuc = axios.create({
    withCredentials: true,
    baseURL: DB_URL,
})
$apiAuc.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
export default $apiAuc