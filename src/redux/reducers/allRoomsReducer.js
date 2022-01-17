import initialState from '../init/initialState'
import { GET_ALL_ROOMS } from '../types/allRoomsTypes'

export const allRoomsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROOMS :
            return [...action.payload]

        default:
            return state
    }
}