import { PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER, SET_ENEMY_PLAYER } from '../types/enemyPlayerTypes'

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

export const ACTION_getEnemyPlayer = (enemyPlayerFromDb) => {
    return {
        type: SET_ENEMY_PLAYER,
        payload: {...enemyPlayerFromDb},
    }
}
