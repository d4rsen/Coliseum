import axios from 'axios'
import { ACTION_setLoader, ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_getPlayer } from '../actions/playerActions'
import { GET_REWARD_FOR_BATTLE, GET_REWARD_FOR_MOB_BATTLE } from '../types/playerTypes'

export const THUNK_getPlayerFromDb = (userId) => async (dispatch) => {
    try {
        dispatch(ACTION_setLoader())
        const response = await axios.get(
            `https://dbforgame.herokuapp.com/db/ready-for-fun/${userId}`,
            {
                withCredentials: true,
            }
        )
        dispatch(ACTION_getPlayer({...response.data}))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_getPlayerExpAndGoldForBattle = (playerId, WinOrLoss, room) => async (dispatch) => {
    try {
        const response = await axios.post('https://dbforgame.herokuapp.com/battle/get-reward', {
            playerId,
            WinOrLoss,
            room
        })
        dispatch({type: GET_REWARD_FOR_BATTLE, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_getPlayerExpAndGoldForMobBattle = (playerId, WinOrLoss, itemId) => async (dispatch) => {
    try {
        const response = await axios.post('https://dbforgame.herokuapp.com/battle/get-mob-reward', {
            playerId,
            WinOrLoss,
            itemId
        })
        dispatch({type: GET_REWARD_FOR_MOB_BATTLE, payload: response.data})

    } catch (e) {
        console.log(e)
    }
}



