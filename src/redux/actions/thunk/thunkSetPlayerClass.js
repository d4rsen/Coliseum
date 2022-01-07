import $apiDb from '../../../services/axiosService2'
import { ACTION_setPlayerClass } from '../actionSetPlayerClass'

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        console.log(response.data)
        dispatch(ACTION_setPlayerClass(response.data))
    } catch (e) {
        console.log(e.response?.message)
    }
}