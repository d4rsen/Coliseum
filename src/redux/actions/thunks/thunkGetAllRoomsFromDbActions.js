import $apiDb from '../../services/axiosServiceDb'
import { ACTION_getAllRooms } from '../allRoomsActions'
import { unSetLoader } from '../loaderActions'

export const THUNK_ACTION_getAllRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await $apiDb.get('/get-all-rooms')
        dispatch(ACTION_getAllRooms(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}