import { GET_ACTIVE_ROOMS, GET_IDLE_ROOMS } from '../types/allRoomsTypes'

export const ACTION_getIdleRooms = (rooms) => ({
    type: GET_IDLE_ROOMS,
    payload: rooms
})

export const ACTION_getActiveRooms = (rooms) => ({
    type: GET_ACTIVE_ROOMS,
    payload: rooms
})
