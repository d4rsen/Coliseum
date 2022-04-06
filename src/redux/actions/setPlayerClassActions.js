import { SET_PLAYER_CLASS } from '../types/playerTypes'

export const ACTION_setPlayerClass = (playerClassFromDb) => ({
    type: SET_PLAYER_CLASS,
    payload: {...playerClassFromDb}
})
