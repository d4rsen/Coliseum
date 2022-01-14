import axios from 'axios'
import { ACTION_getEnemyPlayer } from '../enemyPlayerActions'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getPlayer({...response.data}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}
export const THUNK_ACTION_getEnemyPlayerFromDb = (WS_enemyPlayer) => async (dispatch) => {
    try {
        // const response = await axios.get(
        //     `https://dbforgame.herokuapp.com/db/ready-for-fun/1`,
        //     {
        //         withCredentials: true,
        //     }
        // )
        // dispatch(ACTION_getEnemyPlayer(response.data)
        dispatch(ACTION_getEnemyPlayer(WS_enemyPlayer))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}