import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_setRoom } from '../actions/roomActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_enterRoom = (roomId) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await $apiDb.get(`/enter-exact-room/${+roomId}`)
        dispatch(ACTION_setRoom({id: response.data.id}))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

