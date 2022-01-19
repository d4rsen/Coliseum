import initialState from '../init/initialState'
import { SET_WATCH_BATTLE_PLAYERS } from '../types/watchBattleTypes'

export const watchBattleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WATCH_BATTLE_PLAYERS:
            return {...state, player1: action.payload.player1, player2: action.payload.player2}

        default:
            return state
    }
}