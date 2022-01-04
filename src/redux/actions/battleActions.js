import {
    ATTACK_BODY_PLAYER,
    ATTACK_BODY_ENEMY_PLAYER,
    ATTACK_HEAD_PLAYER,
    ATTACK_HEAD_ENEMY_PLAYER,
    ATTACK_LEFT_HAND_PLAYER,
    ATTACK_LEFT_HAND_ENEMY_PLAYER,
    ATTACK_LEGS_PLAYER,
    ATTACK_LEGS_ENEMY_PLAYER,
    ATTACK_RIGHT_HAND_PLAYER,
    ATTACK_RIGHT_HAND_ENEMY_PLAYER,
    DEFEND_BODY_PLAYER,
    DEFEND_BODY_ENEMY_PLAYER,
    DEFEND_HEAD_PLAYER,
    DEFEND_HEAD_ENEMY_PLAYER,
    DEFEND_LEFT_HAND_PLAYER,
    DEFEND_LEFT_HAND_ENEMY_PLAYER,
    DEFEND_LEGS_PLAYER,
    DEFEND_LEGS_ENEMY_PLAYER,
    DEFEND_RIGHT_HAND_PLAYER,
    DEFEND_RIGHT_HAND_ENEMY_PLAYER,
    UNSET_ATTACK_BODY_PLAYER,
    UNSET_ATTACK_HEAD_PLAYER,
    UNSET_ATTACK_LEFT_HAND_PLAYER,
    UNSET_ATTACK_LEGS_PLAYER,
    UNSET_ATTACK_RIGHT_HAND_PLAYER,
    UNSET_DEFEND_BODY_PLAYER,
    UNSET_DEFEND_HEAD_PLAYER,
    UNSET_DEFEND_LEFT_HAND_PLAYER,
    UNSET_DEFEND_LEGS_PLAYER,
    UNSET_DEFEND_RIGHT_HAND_PLAYER,
} from "../types/battleTypes"

//SET

//player
export const ACTION_attackHeadPlayer1 = () => ({type: ATTACK_HEAD_PLAYER})
export const ACTION_attackLeftHandPlayer1 = () => ({type: ATTACK_LEFT_HAND_PLAYER})
export const ACTION_attackRightHandPlayer1 = () => ({type: ATTACK_RIGHT_HAND_PLAYER,})
export const ACTION_attackBodyPlayer1 = () => ({type: ATTACK_BODY_PLAYER})
export const ACTION_attackLegsPlayer1 = () => ({type: ATTACK_LEGS_PLAYER})

export const ACTION_defendHeadPlayer1 = () => ({type: DEFEND_HEAD_PLAYER})
export const ACTION_defendLeftHandPlayer1 = () => ({type: DEFEND_LEFT_HAND_PLAYER})
export const ACTION_defendRightHandPlayer1 = () => ({type: DEFEND_RIGHT_HAND_PLAYER,})
export const ACTION_defendBodyPlayer1 = () => ({type: DEFEND_BODY_PLAYER})
export const ACTION_defendLegsPlayer1 = () => ({type: DEFEND_LEGS_PLAYER})

//enemy player

export const ACTION_attackHeadPlayer2 = () => ({type: ATTACK_HEAD_ENEMY_PLAYER})
export const ACTION_attackLeftHandPlayer2 = () => ({type: ATTACK_LEFT_HAND_ENEMY_PLAYER})
export const ACTION_attackRightHandPlayer2 = () => ({type: ATTACK_RIGHT_HAND_ENEMY_PLAYER,})
export const ACTION_attackBodyPlayer2 = () => ({type: ATTACK_BODY_ENEMY_PLAYER})
export const ACTION_attackLegsPlayer2 = () => ({type: ATTACK_LEGS_ENEMY_PLAYER})

export const ACTION_defendHeadPlayer2 = () => ({type: DEFEND_HEAD_ENEMY_PLAYER})
export const ACTION_defendLeftHandPlayer2 = () => ({type: DEFEND_LEFT_HAND_ENEMY_PLAYER})
export const ACTION_defendRightHandPlayer2 = () => ({type: DEFEND_RIGHT_HAND_ENEMY_PLAYER,})
export const ACTION_defendBodyPlayer2 = () => ({type: DEFEND_BODY_ENEMY_PLAYER})
export const ACTION_defendLegsPlayer2 = () => ({type: DEFEND_LEGS_ENEMY_PLAYER})

//UNSET

//player
export const ACTION_unsetAttackHeadPlayer1 = () => ({type: UNSET_ATTACK_HEAD_PLAYER,})
export const ACTION_unsetAttackLeftHandPlayer1 = () => ({type: UNSET_ATTACK_LEFT_HAND_PLAYER,})
export const ACTION_unsetAttackRightHandPlayer1 = () => ({type: UNSET_ATTACK_RIGHT_HAND_PLAYER,})
export const ACTION_unsetAttackBodyPlayer1 = () => ({type: UNSET_ATTACK_BODY_PLAYER,})
export const ACTION_unsetAttackLegsPlayer1 = () => ({type: UNSET_ATTACK_LEGS_PLAYER,})

export const ACTION_unsetDefendHeadPlayer1 = () => ({type: UNSET_DEFEND_HEAD_PLAYER,})
export const ACTION_unsetDefendLeftHandPlayer1 = () => ({type: UNSET_DEFEND_LEFT_HAND_PLAYER,})
export const ACTION_unsetDefendRightHandPlayer1 = () => ({type: UNSET_DEFEND_RIGHT_HAND_PLAYER,})
export const ACTION_unsetDefendBodyPlayer1 = () => ({type: UNSET_DEFEND_BODY_PLAYER,})
export const ACTION_unsetDefendLegsPlayer1 = () => ({type: UNSET_DEFEND_LEGS_PLAYER,})

// enemy player no needs