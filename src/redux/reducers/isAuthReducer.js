import initialState from '../init/initialState'
import { IS_AUTH, IS_NOT_AUTH } from '../types/authTypes'

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
