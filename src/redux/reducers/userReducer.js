import {SET_USER, UNSET_USER} from "../types/userTypes"
import initialState from "../state/initialState"

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...action.payload}

        case UNSET_USER:
            return null

        default:
            return state
    }
}
