import initialState from '../init/initialState'
import { SET_PLAYER_INVENTORY } from '../types/playerInventoryTypes'

export const playerInventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_INVENTORY:
            const temp = state.slice()
            const playerItems = action.payload
            playerItems.forEach(e => {
                temp.unshift(e)
                temp.pop()
            })
            return temp

        default:
            return state

    }
}