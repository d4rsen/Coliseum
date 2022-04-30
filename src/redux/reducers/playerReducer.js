import initialState from '../init/initial.state'
import {
    GET_REWARD_FOR_BATTLE,
    GET_REWARD_FOR_MOB_BATTLE,
    PLAYER_DODGED,
    PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
    PUNCH_FROM_MOB_TO_PLAYER,
    REGENERATE,
    SET_PLAYER,
    UNSET_PLAYER
} from '../types/playerTypes'

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER:
            return action.payload
        case UNSET_PLAYER:
            return null
        case GET_REWARD_FOR_BATTLE :
            return {...state, exp: action.payload.exp, balance: action.payload.balance}
        case GET_REWARD_FOR_MOB_BATTLE:
            return {...state, exp: action.payload.exp, balance: action.payload.balance}
        case PLAYER_DODGED :
            const staminaLess3 = state.ap - 1
            return {...state, ap: staminaLess3}
        case PUNCH_FROM_MOB_TO_PLAYER:
            const dmg = Math.floor(state.hp - (action.payload / (state.total_stats.def)))
            const staminaLess = state.ap - 1
            return {...state, hp: dmg, ap: staminaLess}
        case PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER:
            const dmg3 = Math.floor(state.hp - (action.payload.enemyPlayerDamage - (state.total_stats.def * 0.1)))
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

