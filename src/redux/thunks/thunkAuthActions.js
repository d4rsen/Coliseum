import axios from 'axios'
import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_isAuth, ACTION_isNotAuth, ACTION_setUser, ACTION_unsetUser } from '../actions/userActions'
import AuthService from '../services/auth.service'
import { API_URL } from '../services/axios.api.service'
import { THUNK_getPlayerFromDb } from './thunkPlayersFromDbActions'

export const THUNK_logout = () => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        await AuthService.logout()
        dispatch(ACTION_unsetUser())
        dispatch(ACTION_isNotAuth())
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(ACTION_unSetLoader())
    }
}
export const THUNK_login = (userData) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await AuthService.login(userData)
        dispatch(ACTION_setUser({user: response.data.user}))
        dispatch(ACTION_isAuth())
        dispatch(THUNK_getPlayerFromDb(response.data.user.id))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(ACTION_unSetLoader())
    }
}
export const THUNK_register = (userData) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await AuthService.registration(userData)
        dispatch(ACTION_setUser({user: response.data.user}))
        dispatch(ACTION_isAuth())
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(ACTION_unSetLoader())
    }
}
export const THUNK_checkAuth = () => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await axios.get(`${API_URL}/refresh`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        dispatch(ACTION_setUser({user: response.data.user}))
        dispatch(ACTION_isAuth())
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(ACTION_unSetLoader())
    }
}
