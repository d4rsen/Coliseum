import initialState from '../init/initialState'
import {
    PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
    PUNCH_FROM_MOB_TO_PLAYER,
    REGENERATE,
    SET_PLAYER,
    UNSET_PLAYER
} from '../types/playerTypes'

export const playerReducer = (state = initialState, action) => {
    // const player = {...state}
    const random = Math.floor(Math.random() * 100)
    const chance = (characterEvasion) => characterEvasion > random

    switch (action.type) {
        case SET_PLAYER:
            return action.payload

        case UNSET_PLAYER:
            return null

        case PUNCH_FROM_MOB_TO_PLAYER:
            const dmg = state.hp - action.payload / state.total_stats.def
            const staminaLess = state.ap - 1
            if (chance(state.evs)) {
                console.log(`${state.nickName} уклонился !`)
                return {...state, ap: staminaLess}
            } else {
                return {...state, hp: dmg, ap: staminaLess}
            }
        case PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER:

            // console.log(action.payload.battlePlayer, action.payload.battleEnemyPlayer, action.payload.enemyPlayerDamage)

            const dmg3 = state.hp - (action.payload.enemyPlayerDamage / (state.total_stats.def * 0.5))
            const staminaLess2 = state.ap - 1

            if (action.payload.battlePlayer.defendHead === true && action.payload.battleEnemyPlayer.attackHead === true) {
                return {...state, ap: staminaLess2}
            }
            if ((action.payload.battlePlayer.defendBody === true) && (action.payload.battleEnemyPlayer.attackBody === true)) {
                return {...state, ap: staminaLess2}
            }
            if ((action.payload.battlePlayer.defendLegs === true) && (action.payload.battleEnemyPlayer.attackLegs === true)) {
                return {...state, ap: staminaLess2}
            }
            if (chance(state.total_stats.evs)) {
                console.log(`${state.nickName} уклонился !`)
                return {...state, ap: staminaLess2}
            }
            return {...state, hp: dmg3, ap: staminaLess2}

        case REGENERATE:
            const temp = state.hp + 1
            const temp2 = state.ap + 1
            const temp3 = state.mp + 1
            if (state.hp < 100 && state.ap < 100 && state.mp < 100) {
                return {...state, hp: temp, ap: temp2, mp: temp3}
            }
            if (state.hp < 100 && state.ap < 100) {
                return {...state, hp: temp, ap: temp2}
            }
            if (state.hp < 100 && state.mp < 100) {
                return {...state, hp: temp, mp: temp3}
            }
            if (state.ap < 100 && state.mp < 100) {
                return {...state, ap: temp2, mp: temp3}
            }
            if (state.hp < 100) {
                return {...state, hp: temp}
            }
            if (state.ap < 100) {
                return {...state, ap: temp2}
            }
            if (state.mp < 100) {
                return {...state, mp: temp3}
            }

            return state

        default:
            return state
    }
}

