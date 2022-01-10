import $api from './axiosServiceApi'

export default class AuthService {

    static async registration(userData) {
        const {email, password, login} = userData
        const response = await $api.post('/registration', {login, email, password})
        localStorage.setItem('token', response.data.accessToken)
        return response
    }

    static async login(userData) {
        const {email, password} = userData
        const response = await $api.post('/login', {email, password})
        localStorage.setItem('token', response.data.accessToken)
        return response
    }

    static async logout() {
        await $api.post('/logout')
        localStorage.removeItem('token')
    }
}