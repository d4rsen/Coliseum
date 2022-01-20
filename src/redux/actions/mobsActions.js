import { PUNCH_FROM_PLAYER_TO_MOB, SET_MOB } from '../types/mobsTypes'

export const ACTION_getMob = (mobFromDb) => {
    return {
        type: SET_MOB, payload: mobFromDb
    }
}
export const ACTION_punchFromPlayerToMob = (num) => {
    return {
        type: PUNCH_FROM_PLAYER_TO_MOB,
        payload: num
    }
}