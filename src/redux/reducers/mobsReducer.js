import initialState from '../init/initialState'
import {PUNCH_FROM_PLAYER_TO_MOB, SET_MOBS, UNSET_MOBS} from '../types/mobsTypes'

export const mobsReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (mobEvasion) => mobEvasion > random
    switch (action.type) {
        case SET_MOBS:
            return [...state, ...action.payload]

        case UNSET_MOBS:
            return null

        case PUNCH_FROM_PLAYER_TO_MOB:
            const temp = [...state]
            const mob = temp.filter(el => el.avatar === action.payload.avatar)[0]
            const dmg = mob.hp - action.payload.num + mob.defence
            const staminaLess = mob.ap - 1
            if (chance(mob.evasion)) {
                console.log((`${mob.nickName} уклонился !`))
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
