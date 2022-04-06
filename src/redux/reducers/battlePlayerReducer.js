import initialState from '../init/initialState'
import {
    ATTACK_BODY_PLAYER,
    ATTACK_HEAD_PLAYER,
    ATTACK_LEGS_PLAYER,
    DEFEND_BODY_PLAYER,
    DEFEND_HEAD_PLAYER,
    DEFEND_LEGS_PLAYER,
    UNSET_ATTACK_BODY_PLAYER,
    UNSET_ATTACK_HEAD_PLAYER,
    UNSET_ATTACK_LEGS_PLAYER,
    UNSET_DEFEND_BODY_PLAYER,
    UNSET_DEFEND_HEAD_PLAYER,
    UNSET_DEFEND_LEGS_PLAYER,
} from '../types/battleTypes'

export const battlePlayerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ATTACK_HEAD_PLAYER:
            return {...state, attackHead: true}
        case ATTACK_BODY_PLAYER:
            return {...state, attackBody: true}
        case ATTACK_LEGS_PLAYER:
            return {...state, attackLegs: true}
        case DEFEND_HEAD_PLAYER:
            return {...state, defendHead: true}
        case DEFEND_BODY_PLAYER:
            return {...state, defendBody: true}
        case DEFEND_LEGS_PLAYER:
            return {...state, defendLegs: true}
        case UNSET_ATTACK_HEAD_PLAYER:
            return {...state, attackHead: false}
        case UNSET_ATTACK_BODY_PLAYER:
            return {...state, attackBody: false}
        case UNSET_ATTACK_LEGS_PLAYER:
            return {...state, attackLegs: false}
        case UNSET_DEFEND_HEAD_PLAYER:
            return {...state, defendHead: false}
        case UNSET_DEFEND_BODY_PLAYER:
            return {...state, defendBody: false}
        case UNSET_DEFEND_LEGS_PLAYER:
            return {...state, defendLegs: false}
        default:
            return state
    }
}
