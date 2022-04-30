import initialState from '../init/initial.state'
import { SET_EVASION, UNSET_EVASION } from '../types/evasionTypes'

export const evasionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVASION :
            return true
        case UNSET_EVASION:
            return false

        default:
            return state
    }
}
