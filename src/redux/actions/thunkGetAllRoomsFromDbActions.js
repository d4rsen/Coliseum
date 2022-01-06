import axios from 'axios'
import { ACTION_getAllRooms } from './allRoomsActions'
import { setLoader, unSetLoader } from './loaderActions'

export const THUNK_ACTION_getAllRoomsFromDb = () => async (dispatch) => {
    dispatch(setLoader())
    try {
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/get-all-rooms`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getAllRooms(response.data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}