import { PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER, SET_ENEMY_PLAYER } from '../types/enemyPlayerTypes'

export const ACTION_punchFromPlayerToEnemyPlayer = (playerDamage) => {
  return {
    type: PUNCH_FROM_PLAYER_TO_ENEMY_PLAYER,
    payload: playerDamage
  }
}

export const ACTION_getEnemyPlayer = (enemyPlayerFromDb) => {
  return {
    type: SET_ENEMY_PLAYER,
    payload: {...enemyPlayerFromDb},
  }
}
