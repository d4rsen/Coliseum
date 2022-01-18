import { SET_EVASION, UNSET_EVASION } from '../../types/evasionTypes'

export const ACTION_setEvasion = () => {
    return {
        type: SET_EVASION
    }
}
export const ACTION_unSetEvasion = () => {
    return {
        type: UNSET_EVASION
    }
}