import axios from 'axios'
import AuthService from '../../services/authService'
<<<<<<< Updated upstream
import { API_URL } from '../../services/axiosServiceApi'
import { IS_AUTH, IS_NOT_AUTH } from '../../types/authTypes'
import { SET_USER, UNSET_USER } from '../../types/userTypes'
import { setLoader, unSetLoader } from '../loaderActions'
import { THUNK_ACTION_getPlayerFromDb } from './thunkPlayersFromDbActions'
=======
import {API_URL} from '../../services/axiosServiceApi'
import {IS_AUTH, IS_NOT_AUTH} from '../../types/authTypes'
import {SET_USER, UNSET_USER} from '../../types/userTypes'
import {setLoader, unSetLoader} from '../loaderActions'
>>>>>>> Stashed changes

export const THUNK_ACTION_logout = () => async (dispatch) => {
    try {
        dispatch(setLoader())
        await AuthService.logout()
        dispatch({type: UNSET_USER})
        dispatch({type: IS_NOT_AUTH})
        dispatch(unSetLoader())
    } catch (e) {
        alert(e.response?.data?.message)
    }
}
export const THUNK_ACTION_login = (userData) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await AuthService.login(userData)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
        console.log(response.data)
        dispatch(THUNK_ACTION_getPlayerFromDb(response.data.user.id))
        dispatch(unSetLoader())
    } catch (e) {
        alert(e.response?.data?.message)
    } finally {
        dispatch(unSetLoader())
    }
}
export const THUNK_ACTION_register = (userData) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await AuthService.registration(userData)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
        dispatch(unSetLoader())
    } catch (e) {
        alert(e.response?.data?.message)
    }
}
export const THUNK_ACTION_checkAuth = () => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.get(`${API_URL}/refresh`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}