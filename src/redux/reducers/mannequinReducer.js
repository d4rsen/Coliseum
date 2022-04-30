import initialState from '../init/initial.state'
import { MANNEQUIN_REGENERATE, PUNCH_FROM_PLAYER_TO_MANNEQUIN } from '../types/playerTypes'

export const mannequinReducer = (state = initialState, action) => {
    const damage = state.hp - action.payload
    const fullHp = 10000
    switch (action.type) {
        case PUNCH_FROM_PLAYER_TO_MANNEQUIN:
            return {...state, hp: damage}
        case MANNEQUIN_REGENERATE:
            return {...state, hp: fullHp}
        default:
            return state
    }
}
