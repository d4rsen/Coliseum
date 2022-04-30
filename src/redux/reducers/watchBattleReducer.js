import initialState from '../init/initial.state'
import { SET_WATCH_BATTLE_PLAYERS, UNSET_WATCH_BATTLE_PLAYERS } from '../types/watchBattleTypes'

export const watchBattleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WATCH_BATTLE_PLAYERS:
            return action.payload
        case UNSET_WATCH_BATTLE_PLAYERS :
            return null
        default:
            return state
    }
}
