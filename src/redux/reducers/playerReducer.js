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
            let {battlePlayer} = action.payload
            let {battleEnemyPlayer} = action.payload
            let {enemyPlayerDamage} = action.payload

            // let dmg3 = state.hp - enemyPlayerDamage / state.total_stats.def * 0.1
            let dmg3 = state.hp - (enemyPlayerDamage / (state.total_stats.def * 0.1))

            if ((battlePlayer.defendHead === true) && (battleEnemyPlayer.attackHead === true)) {
                dmg3 = state.hp
            }
            if ((battlePlayer.defendBody === true) && (battleEnemyPlayer.attackBody === true)) {
                dmg3 = state.hp
            }
            if ((battlePlayer.defendLegs === true) && (battleEnemyPlayer.attackLegs === true)) {
                dmg3 = state.hp
            }

            const staminaLess2 = state.ap - 1
            if (chance(state.total_stats.evs)) {
                console.log(`${state.nickName} уклонился !`)
                return {...state, ap: staminaLess2}
            }
            return {...state, hp: dmg3, ap: staminaLess2}
            
        case REGENERATE:
            const temp = state.hp + 1
            const temp2 = state.ap + 1
            const temp3 = state.mp + 1
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

