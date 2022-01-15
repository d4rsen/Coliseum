import axios from 'axios'
<<<<<<< Updated upstream
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'
=======
import {setLoader, unSetLoader} from '../loaderActions'
import {ACTION_getPlayer} from '../playerActions'
>>>>>>> Stashed changes

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
