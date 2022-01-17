import $apiDb from '../../services/axiosServiceDb'
import {setLoader, unSetLoader} from '../loaderActions'
import {ACTION_getPlayer} from '../playerActions'

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        dispatch(ACTION_getPlayer(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}
