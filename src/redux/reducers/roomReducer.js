import initialState from '../state/initialState'
import { SET_ROOM, UNSET_ROOM } from '../types/roomTypes'

export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROOM :
            return {...action.payload}

        case UNSET_ROOM :
            return null

        default:
            return state
    }
}