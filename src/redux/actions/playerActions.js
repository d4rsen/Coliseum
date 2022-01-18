import {
    PLAYER_DODGED,
    PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
    PUNCH_FROM_MOB_TO_PLAYER,
    REGENERATE,
    SET_PLAYER
} from '../types/playerTypes'
import { ACTION_setEvasion, ACTION_unSetEvasion } from './thunks/evasionActions'

// санка только чтобы был диспатч

export const ACTION_punchFromEnemyPlayerToPlayer = (enemyPlayerDamage, battlePlayer, battleEnemyPlayer, playerWs) => async (dispatch) => {
    const random = Math.floor(Math.random() * 100)
    const chance = (characterEvasion) => characterEvasion > random

    if (chance(playerWs.total_stats.evs) > random) {
        dispatch(ACTION_setEvasion())
        dispatch(ACTION_playerDodged())
    }

    dispatch(ACTION_unSetEvasion())

    return {
        type: PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
        payload: {
            enemyPlayerDamage,
            battlePlayer,
            battleEnemyPlayer
        }
    }
}

export const ACTION_punchFromMobToPlayer = (mobDamage) => {
    return {
        type: PUNCH_FROM_MOB_TO_PLAYER,
        payload: mobDamage
    }
}

export const ACTION_getPlayer = (playerFromDb) => {
    return {
        type: SET_PLAYER,
        payload: {...playerFromDb},
    }
}

export const ACTION_playerDodged = () => ({type: PLAYER_DODGED})

export const ACTION_PlayerRegenerate = () => ({type: REGENERATE})