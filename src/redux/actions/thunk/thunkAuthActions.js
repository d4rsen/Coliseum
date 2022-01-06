import axios from 'axios'
import AuthService from '../../../services/authService'
import { API_URL } from '../../../services/axiosService'
import { IS_AUTH, IS_NOT_AUTH } from '../../types/authTypes'
import { SET_USER, UNSET_USER } from '../../types/userTypes'
import { setLoader, unSetLoader } from '../loaderActions'

export const THUNK_ACTION_logout = () => async (dispatch) => {
    await AuthService.logout()
    dispatch({type: UNSET_USER})
    dispatch({type: IS_NOT_AUTH})
}
export const THUNK_ACTION_login = (userData) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await AuthService.login(userData)
        console.log(response.data.user)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
        dispatch(unSetLoader())
    } catch (e) {
        alert(e.response?.data?.message)
    } finally {
        dispatch(unSetLoader())
    }
}
export const THUNK_ACTION_register = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        dispatch(setLoader())
        const response = await AuthService.registration(userData)
        console.log(response)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
        dispatch(unSetLoader())
    } catch (e) {
        alert(e.response?.data?.message)
    } finally {
        dispatch(unSetLoader())
    }
}
export const THUNK_ACTION_checkAuth = () => async (dispatch) => {
    dispatch(setLoader())
    try {
        const response = await axios.get(`${API_URL}/refresh`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        dispatch({type: SET_USER, payload: {user: response.data.user}})
        dispatch({type: IS_AUTH})
    } catch (e) {
        console.log(e.response?.message)
    } finally {
        dispatch(unSetLoader())
    }
}