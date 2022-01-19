import $apiDb from '../../services/axiosServiceDb'
import { ACTION_getActiveRooms, ACTION_getIdleRooms } from '../allRoomsActions'
import { unSetLoader } from '../loaderActions'

export const THUNK_ACTION_getIdleRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await $apiDb.get('/get-idle-rooms')
        dispatch(ACTION_getIdleRooms(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_ACTION_getActiveRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await $apiDb.get('/get-active-rooms')
        dispatch(ACTION_getActiveRooms(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}