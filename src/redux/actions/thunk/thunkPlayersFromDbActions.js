import axios from 'axios'
import { ACTION_getEnemyPlayer } from '../enemyPlayerActions'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_getPlayer } from '../playerActions'

export const THUNK_ACTION_getPlayerFromDb = (userId) => async (dispatch) => {
    dispatch(setLoader())
    try {
        const response = await axios.get(
            `http://dbforgame.herokuapp.com/db/ready-for-fun/2`,
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
export const THUNK_ACTION_getEnemyPlayerFromDb = (WS_enemyPlayer) => async (dispatch) => {
    dispatch(setLoader())
    try {
        // const response = await axios.get(
        //     `https://dbforgame.herokuapp.com/db/ready-for-fun/1`,
        //     {
        //         withCredentials: true,
        //     }
        // )
        // dispatch(ACTION_getEnemyPlayer(response.data)
        dispatch(ACTION_getEnemyPlayer(WS_enemyPlayer))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}