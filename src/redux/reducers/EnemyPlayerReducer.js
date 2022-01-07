import initialState from '../state/initialState'
import { PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER, SET_ENEMY_PLAYER, UNSET_ENEMY_PLAYER } from '../types/enemyPlayerTypes'

export const enemyPlayerReducer = (state = initialState, action) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (enemyPlayerEvasion) => enemyPlayerEvasion > random
    const enemyPlayer = {...state}

    switch (action.type) {
        case SET_ENEMY_PLAYER:
            return {...action.payload}

        case UNSET_ENEMY_PLAYER:
            return null

        case PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER:
            const {battlePlayer} = action.payload
            const {battleEnemyPlayer} = action.payload
            const {playerDamage} = action.payload

            let dmg3 = enemyPlayer.hp - playerDamage / 2

            if (battleEnemyPlayer.defendHead === true && battlePlayer.attackHead === true) {
                dmg3 = enemyPlayer.hp
            }
            if (battleEnemyPlayer.attackLeftHand === true && battlePlayer.attackLeftHand === true) {
                dmg3 = enemyPlayer.hp
            }
            if (battleEnemyPlayer.attackRightHand === true && battlePlayer.attackRightHand === true) {
                dmg3 = enemyPlayer.hp
            }
            if (battleEnemyPlayer.attackBody === true && battlePlayer.attackBody === true) {
                dmg3 = enemyPlayer.hp
            }
            if (battleEnemyPlayer.defendLegs === true && battlePlayer.attackLegs === true) {
                dmg3 = enemyPlayer.hp
            }

            const staminaLess = enemyPlayer.ap - 1
            if (chance(enemyPlayer.total_stats.evs)) {
                console.log(`${enemyPlayer.nickName} уклонился !`)
                return {...state, ap: staminaLess}
            } else {
                return {...state, hp: dmg3, ap: staminaLess}
            }

        default:
            return state
    }
}
