import initialState from '../init/initial.state'
import { SET_CHAT, UNSET_CHAT } from '../types/enemyPlayerTypes'

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAT :
            return [action.payload, ...state]
        case UNSET_CHAT:
            return []
        default:
            return state
    }
}



