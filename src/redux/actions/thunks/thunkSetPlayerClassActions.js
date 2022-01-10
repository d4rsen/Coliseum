import $apiDb from '../../services/axiosServiceDb'
import { unSetLoader } from '../loaderActions'
import { ACTION_setPlayerClass } from '../setPlayerClassActions'

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        dispatch(ACTION_setPlayerClass(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    } finally {
        dispatch(unSetLoader())
    }
}