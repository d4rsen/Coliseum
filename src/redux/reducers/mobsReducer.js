import initialState from '../init/initialState'
import { PUNCH_FROM_PLAYER_TO_MOB, SET_MOBS, UNSET_MOBS } from '../types/mobsTypes'

export const mobsReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (mobEvasion) => mobEvasion > random
    switch (action.type) {
        case SET_MOBS:
            return action.payload

        case UNSET_MOBS:
            return null

        case PUNCH_FROM_PLAYER_TO_MOB:
            const dmg = state.hp - action.payload.num + state.defence
            const staminaLess = state.ap - 1
            if (chance(state.evasion)) {
                console.log((`${state.nickName} уклонился !`))
                return state.map(monster => {
                    if (monster.avatar === action.payload.avatar) {
                        monster.ap = staminaLess
                    }
                    return monster
                })
            } else {
                return state.map(monster => {
                    if (monster.avatar === action.payload.avatar) {
                        monster.hp = dmg
                        monster.ap = staminaLess
                    }
                    return monster
                })
            }
        default:
            return state
    }
}
