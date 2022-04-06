import { SET_ROOM, UNSET_ROOM } from '../types/roomTypes'

export const ACTION_setRoom = (room) => ({
    type: SET_ROOM,
    payload: {...room}
})
export const ACTION_unSetRoom = () => ({type: UNSET_ROOM})
