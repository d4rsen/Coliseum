import {GET_ALL_ROOMS} from '../types/allRoomsTypes'

export const ACTION_getAllRooms = (rooms) => {
    return {
        type: GET_ALL_ROOMS,
        payload: rooms
    }
}