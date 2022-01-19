import axios from 'axios'
import { GET_REWARD_FOR_BATTLE } from '../../types/playerTypes'
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

export const THUNK_ACTION_getPlayerExpAndGoldForBattle = (playerId, WinOrLoss, room) => async (dispatch) => {
    try {
        const response = await axios.post('https://dbforgame.herokuapp.com/battle/get-reward', {playerId, WinOrLoss, room})
        dispatch({type: GET_REWARD_FOR_BATTLE, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}