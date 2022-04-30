import initialState from '../init/initial.state'
import { IS_AUTH, IS_NOT_AUTH } from '../types/userTypes'

export const isAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return true
        case IS_NOT_AUTH:
            return false
        default:
            return state
    }
}
