import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_getPlayer } from '../actions/playerActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_setPlayerClass = (userData) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        dispatch(ACTION_getPlayer(response.data))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}
