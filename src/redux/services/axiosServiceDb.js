import axios from 'axios'

export const DB_URL = 'https://dbforgame.herokuapp.com/db'

const $apiDb = axios.create({
    withCredentials: true,
    baseURL: DB_URL,
})
$apiDb.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
export default $apiDb