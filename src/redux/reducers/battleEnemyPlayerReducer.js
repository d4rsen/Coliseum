import initialState from '../init/initialState'
import {
    ATTACK_BODY_ENEMY_PLAYER,
    ATTACK_HEAD_ENEMY_PLAYER,
    ATTACK_LEGS_ENEMY_PLAYER,
    DEFEND_BODY_ENEMY_PLAYER,
    DEFEND_HEAD_ENEMY_PLAYER,
    DEFEND_LEGS_ENEMY_PLAYER,
    GET_ENEMY_STATE_FROM_WS,
    UNSET_ATTACK_BODY_ENEMY_PLAYER,
    UNSET_ATTACK_HEAD_ENEMY_PLAYER,
    UNSET_ATTACK_LEGS_ENEMY_PLAYER,
    UNSET_DEFEND_BODY_ENEMY_PLAYER,
    UNSET_DEFEND_HEAD_ENEMY_PLAYER,
    UNSET_DEFEND_LEGS_ENEMY_PLAYER,
} from '../types/battleTypes'

export const battleEnemyPlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ENEMY_STATE_FROM_WS :
            return {...action.payload}
        case ATTACK_HEAD_ENEMY_PLAYER:
            return {...state, attackHead: true}
        case ATTACK_BODY_ENEMY_PLAYER:
            return {...state, attackBody: true}
        case ATTACK_LEGS_ENEMY_PLAYER:
            return {...state, attackLegs: true}
        case DEFEND_HEAD_ENEMY_PLAYER:
            return {...state, defendHead: true}
        case DEFEND_BODY_ENEMY_PLAYER:
            return {...state, defendBody: true}
        case DEFEND_LEGS_ENEMY_PLAYER:
            return {...state, defendLegs: true}
        case UNSET_ATTACK_HEAD_ENEMY_PLAYER:
            return {...state, attackHead: false}
        case UNSET_ATTACK_BODY_ENEMY_PLAYER:
            return {...state, attackBody: false}
        case UNSET_ATTACK_LEGS_ENEMY_PLAYER:
            return {...state, attackLegs: false}
        case UNSET_DEFEND_HEAD_ENEMY_PLAYER:
            return {...state, defendHead: false}
        case UNSET_DEFEND_BODY_ENEMY_PLAYER:
            return {...state, defendBody: false}
        case UNSET_DEFEND_LEGS_ENEMY_PLAYER:
            return {...state, defendLegs: false}
        default:
            return state
    }
}
