import { PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER, SET_ENEMY_PLAYER, UNSET_ENEMY_PLAYER } from '../types/enemyPlayerTypes'

export const ACTION_punchFromPlayerToEnemyPlayer = (playerDamage, battlePlayer, battleEnemyPlayer) => {
    return {
        type: PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER,
        payload: {
            playerDamage,
            battlePlayer,
            battleEnemyPlayer
        }
    }
}

export const ACTION_getEnemyPlayer = (enemyPlayerFromWs) => {
    return {
        type: SET_ENEMY_PLAYER,
        payload: enemyPlayerFromWs,
    }
}

export const ACTION_unsetEnemyPlayer = () => {
    return {
        type: UNSET_ENEMY_PLAYER,
    }
}
