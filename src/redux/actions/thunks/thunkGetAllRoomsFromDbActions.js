import axios from 'axios'
import { ACTION_getAllRooms } from '../allRoomsActions'
import { unSetLoader } from '../loaderActions'

export const THUNK_ACTION_getAllRoomsFromDb = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/get-all-rooms`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getAllRooms(response.data))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}