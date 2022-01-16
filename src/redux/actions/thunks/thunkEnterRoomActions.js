import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setRoom } from '../roomActions'

export const THUNK_ACTION_enterRoom = (roomId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.get(`/enter-exact-room/${+roomId}`)
        console.log(response.data)
        dispatch(ACTION_setRoom({id: response.data.id}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
} 