import { ACTION_getActiveRooms, ACTION_getIdleRooms } from '../actions/allRoomsActions'
import { ACTION_unSetLoader } from '../actions/loaderActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_getIdleRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await $apiDb.get('/get-idle-rooms')
        dispatch(ACTION_getIdleRooms(response.data))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_getActiveRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await $apiDb.get('/get-active-rooms')
        dispatch(ACTION_getActiveRooms(response.data))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
