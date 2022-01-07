import axios from 'axios'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setRoom } from '../roomActions'

export const THUNK_ACTION_getRoomFromDb = () => async (dispatch) => {
    dispatch(setLoader())
    try {
        const response = await axios.post(
            `http://dbforgame.herokuapp.com/db/post-battle-room/1`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_setRoom({...response.data}))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}
