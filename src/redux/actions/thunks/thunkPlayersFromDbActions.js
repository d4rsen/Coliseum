import axios from 'axios'
import {setLoader, unSetLoader} from '../loaderActions'
import {ACTION_getPlayer} from '../playerActions'

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        console.log(userId)
        dispatch(setLoader())
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,
            {withCredentials: true,}
        )
        console.log(response.data)
        dispatch(ACTION_getPlayer({...response.data}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
