import {
    ATTACK_BODY_ENEMY_PLAYER,
    ATTACK_BODY_PLAYER,
    ATTACK_HEAD_ENEMY_PLAYER,
    ATTACK_HEAD_PLAYER,
    ATTACK_LEFT_HAND_ENEMY_PLAYER,
    ATTACK_LEFT_HAND_PLAYER,
    ATTACK_LEGS_ENEMY_PLAYER,
    ATTACK_LEGS_PLAYER,
    ATTACK_RIGHT_HAND_ENEMY_PLAYER,
    ATTACK_RIGHT_HAND_PLAYER,
    DEFEND_BODY_ENEMY_PLAYER,
    DEFEND_BODY_PLAYER,
    DEFEND_HEAD_ENEMY_PLAYER,
    DEFEND_HEAD_PLAYER,
    DEFEND_LEFT_HAND_ENEMY_PLAYER,
    DEFEND_LEFT_HAND_PLAYER,
    DEFEND_LEGS_ENEMY_PLAYER,
    DEFEND_LEGS_PLAYER,
    DEFEND_RIGHT_HAND_ENEMY_PLAYER,
    DEFEND_RIGHT_HAND_PLAYER,
    GET_ENEMY_STATE_FROM_WS,
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
} from '../types/battleTypes'

//SET

//player
export const ACTION_attackHeadPlayer = () => ({type: ATTACK_HEAD_PLAYER})
export const ACTION_attackLeftHandPlayer = () => ({type: ATTACK_LEFT_HAND_PLAYER})
export const ACTION_attackRightHandPlayer = () => ({type: ATTACK_RIGHT_HAND_PLAYER,})
export const ACTION_attackBodyPlayer = () => ({type: ATTACK_BODY_PLAYER})
export const ACTION_attackLegsPlayer = () => ({type: ATTACK_LEGS_PLAYER})

export const ACTION_defendHeadPlayer = () => ({type: DEFEND_HEAD_PLAYER})
export const ACTION_defendLeftHandPlayer = () => ({type: DEFEND_LEFT_HAND_PLAYER})
export const ACTION_defendRightHandPlayer = () => ({type: DEFEND_RIGHT_HAND_PLAYER,})
export const ACTION_defendBodyPlayer = () => ({type: DEFEND_BODY_PLAYER})
export const ACTION_defendLegsPlayer = () => ({type: DEFEND_LEGS_PLAYER})

//enemy player

export const ACTION_attackHeadEnemyPlayer = () => ({type: ATTACK_HEAD_ENEMY_PLAYER})
export const ACTION_attackLeftHandEnemyPlayer = () => ({type: ATTACK_LEFT_HAND_ENEMY_PLAYER})
export const ACTION_attackRightHandEnemyPlayer = () => ({type: ATTACK_RIGHT_HAND_ENEMY_PLAYER,})
export const ACTION_attackBodyEnemyPlayer = () => ({type: ATTACK_BODY_ENEMY_PLAYER})
export const ACTION_attackLegsEnemyPlayer = () => ({type: ATTACK_LEGS_ENEMY_PLAYER})

export const ACTION_defendHeadEnemyPlayer = () => ({type: DEFEND_HEAD_ENEMY_PLAYER})
export const ACTION_defendLeftHandEnemyPlayer = () => ({type: DEFEND_LEFT_HAND_ENEMY_PLAYER})
export const ACTION_defendRightHandEnemyPlayer = () => ({type: DEFEND_RIGHT_HAND_ENEMY_PLAYER,})
export const ACTION_defendBodyEnemyPlayer = () => ({type: DEFEND_BODY_ENEMY_PLAYER})
export const ACTION_defendLegsEnemyPlayer = () => ({type: DEFEND_LEGS_ENEMY_PLAYER})

//UNSET

//player
export const ACTION_unsetAttackHeadPlayer = () => ({type: UNSET_ATTACK_HEAD_PLAYER,})
export const ACTION_unsetAttackLeftHandPlayer = () => ({type: UNSET_ATTACK_LEFT_HAND_PLAYER,})
export const ACTION_unsetAttackRightHandPlayer = () => ({type: UNSET_ATTACK_RIGHT_HAND_PLAYER,})
export const ACTION_unsetAttackBodyPlayer = () => ({type: UNSET_ATTACK_BODY_PLAYER,})
export const ACTION_unsetAttackLegsPlayer = () => ({type: UNSET_ATTACK_LEGS_PLAYER,})

export const ACTION_unsetDefendHeadPlayer = () => ({type: UNSET_DEFEND_HEAD_PLAYER,})
export const ACTION_unsetDefendLeftHandPlayer = () => ({type: UNSET_DEFEND_LEFT_HAND_PLAYER,})
export const ACTION_unsetDefendRightHandPlayer = () => ({type: UNSET_DEFEND_RIGHT_HAND_PLAYER,})
export const ACTION_unsetDefendBodyPlayer = () => ({type: UNSET_DEFEND_BODY_PLAYER,})
export const ACTION_unsetDefendLegsPlayer = () => ({type: UNSET_DEFEND_LEGS_PLAYER,})

// enemy player no needs

export const ACTION_getEnemyStateFromWS = (WsEnemyPlayerObject) => {
    return {
        type: GET_ENEMY_STATE_FROM_WS,
        payload: {...WsEnemyPlayerObject}
    }
}