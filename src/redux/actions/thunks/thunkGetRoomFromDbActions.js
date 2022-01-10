import axios from 'axios'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setRoom } from '../roomActions'

export const THUNK_ACTION_getRoomFromDb = () => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.post(
            `https://dbforgame.herokuapp.com/db/post-battle-room/1`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_setRoom({...response.data}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}
