import $apiDb from '../../services/axiosServiceDb'
<<<<<<< Updated upstream
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'
=======
import {setLoader, unSetLoader} from '../loaderActions'
import {ACTION_setPlayerClass} from '../setPlayerClassActions'
>>>>>>> Stashed changes

export const THUNK_ACTION_setPlayerClass = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        dispatch(setLoader())
        const response = await $apiDb.post(`/set-player-class`, {...userData})
        console.log(response.data)
<<<<<<< Updated upstream
        dispatch(ACTION_getPlayer(response.data))
=======
        dispatch(ACTION_setPlayerClass(response.data))

>>>>>>> Stashed changes
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e.response?.message)
    }
}
