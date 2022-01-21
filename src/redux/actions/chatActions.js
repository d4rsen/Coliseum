import { SET_CHAT } from '../types/enemyPlayerTypes'

export const ACTION_setChat = obj => {
    return {
        type: SET_CHAT,
        payload: obj
    }
}