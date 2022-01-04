import initialState from "../state/initialState"
import {
    PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER,
    SET_ENEMY_PLAYER,
    UNSET_ENEMY_PLAYER
} from '../types/enemyPlayerTypes'
import {
    PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
    PUNCH_FROM_MOB_TO_PLAYER, REGENERATE,
    SET_PLAYER,
    UNSET_PLAYER
} from '../types/playerTypes'

export const enemyPlayerReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (enemyPlayerEvasion) => enemyPlayerEvasion > random
    switch (action.type) {
        case SET_ENEMY_PLAYER:
            return action.payload

        case UNSET_ENEMY_PLAYER:
            return null

        case PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER:
            const enemyPlayer = {...state}
            const dmg2 = enemyPlayer.hp - action.payload / enemyPlayer.total_stats.def
            const staminaLess = enemyPlayer.ap - 1
            if (chance(enemyPlayer.total_stats.evs)) {
                console.log(`${enemyPlayer.nickName} уклонился !`)
                return {...state, ap: staminaLess}
            } else {
                return {...state, hp: dmg2, ap: staminaLess}
            }

        default:
            return state
    }
}
