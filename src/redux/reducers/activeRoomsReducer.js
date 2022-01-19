import initialState from '../init/initialState'
import { GET_ACTIVE_ROOMS } from '../types/allRoomsTypes'

export const activeRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTIVE_ROOMS:
            return [...action.payload]
        default:
            return state

    }
}