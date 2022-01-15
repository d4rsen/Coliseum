import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setRoom } from '../roomActions'

export const THUNK_ACTION_enterRoom = (roomId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.post(`/enter-exact-room/${roomId}`)
        dispatch(ACTION_setRoom(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}