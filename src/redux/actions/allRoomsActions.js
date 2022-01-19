import { GET_ACTIVE_ROOMS, GET_IDLE_ROOMS } from '../types/allRoomsTypes'

export const ACTION_getIdleRooms = (rooms) => {
    return {
        type: GET_IDLE_ROOMS,
        payload: rooms
    }
}
export const ACTION_getActiveRooms = (rooms) => {
    return {
        type: GET_ACTIVE_ROOMS,
        payload: rooms
    }
}