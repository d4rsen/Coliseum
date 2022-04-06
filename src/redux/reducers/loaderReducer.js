import initialState from '../init/initialState'
import { IS_LOADING, IS_NOT_LOADING } from '../types/loaderTypes'

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return true
        case IS_NOT_LOADING:
            return false
        default:
            return state
    }
}
