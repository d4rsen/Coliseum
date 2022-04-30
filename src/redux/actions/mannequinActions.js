import {
    MANNEQUIN_REGENERATE,
    MANNEQUIN_WAIT_FOR_REGENERATE,
    PUNCH_FROM_PLAYER_TO_MANNEQUIN
} from '../types/playerTypes'

export const ACTION_punchFromPlayerToMannequin = (playerDamage) => ({
    type: PUNCH_FROM_PLAYER_TO_MANNEQUIN,
    payload: playerDamage
})
export const SAGA_mannequinRegenerate = () => ({type: MANNEQUIN_WAIT_FOR_REGENERATE,})
export const ACTION_mannequinRegenerate = () => ({type: MANNEQUIN_REGENERATE,})
