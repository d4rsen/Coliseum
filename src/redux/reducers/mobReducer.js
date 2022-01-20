import initialState from '../init/initialState'
import { PUNCH_FROM_PLAYER_TO_MOB, SET_MOB, UNSET_MOB } from '../types/mobsTypes'

export const mobReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (mobEvasion) => mobEvasion > random
    switch (action.type) {
        case SET_MOB:
            return action.payload

        case UNSET_MOB:
            return null

        case PUNCH_FROM_PLAYER_TO_MOB:
            const dmg = state.creepStats.hp - action.payload
            const staminaLess = state.creepStats.ap - 1
            return {...state, creepStats: {...state.creepStats, hp: dmg, ap: staminaLess}}

        default:
            return state
    }
}
