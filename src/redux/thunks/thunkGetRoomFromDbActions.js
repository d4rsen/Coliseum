import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_setRoom } from '../actions/roomActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_getRoomFromDb = (id) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await $apiDb.post('/post-battle-room', {id})
        dispatch(ACTION_setRoom({id: response.data.id}))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_closeRoom = (id) => async (dispatch) => {
    try {
        await $apiDb.post('/close-battle-room', {id})
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
