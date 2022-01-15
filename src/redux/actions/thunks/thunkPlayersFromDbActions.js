import axios from 'axios'
<<<<<<< Updated upstream
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'
=======
import {ACTION_getEnemyPlayer} from '../enemyPlayerActions'
import {setLoader, unSetLoader} from '../loaderActions'
import {ACTION_getPlayer} from '../playerActions'
>>>>>>> Stashed changes

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.get(
            // http://localhost:4000/
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getPlayer({...response.data}))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}
// export const THUNK_ACTION_getEnemyPlayerFromDb = (WS_enemyPlayer) => async (dispatch) => {
//     try {
//         dispatch(setLoader())
//         dispatch(ACTION_getEnemyPlayer(WS_enemyPlayer))
//     } catch (e) {
//         console.log(e)
//     } finally {
//         dispatch(unSetLoader())
//     }
// }