import initialState from '../init/initialState'
import { PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER, SET_ENEMY_PLAYER, UNSET_ENEMY_PLAYER } from '../types/enemyPlayerTypes'

export const enemyPlayerReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (enemyPlayerEvasion) => enemyPlayerEvasion > random
    // const enemyPlayer = {...state}

    switch (action.type) {
        case SET_ENEMY_PLAYER:
            return action.payload

        case UNSET_ENEMY_PLAYER:
            return null

        case PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER:
            const {playerDamage} = action.payload
            const {battlePlayer} = action.payload
            const {battleEnemyPlayer} = action.payload
            let enemyPlayer = {...state}
            const staminaLess = enemyPlayer.ap - 1

            // let dmg3 = player.hp - playerDamage / player.total_stats.def * 0.1
            let dmg3 = enemyPlayer.hp - (playerDamage / (enemyPlayer.total_stats.def * 0.5))

            if (battleEnemyPlayer.defendHead === true && battlePlayer.attackHead === true) {
                if (chance(enemyPlayer.total_stats.evs)) {
                    console.log(`${enemyPlayer.nickName} уклонился !`)
                    return {...enemyPlayer, ap: staminaLess}
                } else
                    return {...enemyPlayer, ap: staminaLess}
            }
            if ((battleEnemyPlayer.defendBody === true) && (battlePlayer.attackBody === true)) {
                if (chance(enemyPlayer.total_stats.evs)) {
                    console.log(`${enemyPlayer.nickName} уклонился !`)
                    return {...enemyPlayer, ap: staminaLess}
                } else
                    return {...enemyPlayer, ap: staminaLess}
            }
            if ((battleEnemyPlayer.defendLegs === true) && (battlePlayer.attackLegs === true)) {
                if (chance(enemyPlayer.total_stats.evs)) {
                    console.log(`${enemyPlayer.nickName} уклонился !`)
                    return {...enemyPlayer, ap: staminaLess}
                } else
                    return {...enemyPlayer, ap: staminaLess}
            }

            return {...enemyPlayer, hp: dmg3, ap: staminaLess}

        default:
            return state
    }
}
