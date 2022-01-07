import axios from 'axios'
import { DB_URL } from './axiosService'

const $apiDb = axios.create({
    withCredentials: true,
    baseURL: DB_URL,
})
$apiDb.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
export default $apiDb