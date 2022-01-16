import {SET_PLAYER_CLASS} from '../types/playerTypes'

export const ACTION_setPlayerClass = (playerClassFromDb) => {
    return {
        type: SET_PLAYER_CLASS,
        payload: {...playerClassFromDb}
    }
}