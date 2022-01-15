import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setPlayerClass } from '../setPlayerClassActions'

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        console.log(response.data)
        dispatch(ACTION_setPlayerClass(response.data))
        
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}
