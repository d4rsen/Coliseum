import axios from 'axios'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,

            // `https://dbforgame.herokuapp.com/db/ready-for-fun/1`,
            {
                withCredentials: true,
            }
        )
        console.log(response.data)

        dispatch(ACTION_getPlayer({...response.data}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
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