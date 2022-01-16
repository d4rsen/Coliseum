import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        dispatch(setLoader())
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        console.log(response.data)
        dispatch(ACTION_getPlayer(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}
