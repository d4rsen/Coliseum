import { PUNCH_FROM_PLAYER_TO_MOB, SET_MOBS } from '../types/mobsTypes'

export const ACTION_getMobs = (mobFromDb) => {
    return {
        type: SET_MOBS, payload: mobFromDb
    }
}
export const ACTION_punchFromPlayerToMob = (id, num) => {
    return {
        type: PUNCH_FROM_PLAYER_TO_MOB,
        payload: {id, num}
    }
}