import {IS_LOADING, IS_NOT_LOADING} from "../types/loaderTypes"
import initialState from "../state/initialState"

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case  IS_LOADING : {
            return true
        }

        case  IS_NOT_LOADING : {
            return false
        }
        default:
            return state
    }
}
