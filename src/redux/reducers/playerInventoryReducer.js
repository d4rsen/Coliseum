import initialState from '../init/initialState'
import { BUY_ITEM } from '../types/auctionTypes'
import { ADD_RANDOM_ITEM, DELETE_ITEM_FROM_INVENTORY, SET_PLAYER_INVENTORY } from '../types/playerInventoryTypes'

export const playerInventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_INVENTORY:
            return action.payload
        case ADD_RANDOM_ITEM:
            return [...state, action.payload]
        case BUY_ITEM:
            return [...state, action.payload]
        case DELETE_ITEM_FROM_INVENTORY:
            const checker = []
            state.forEach(e => {
                if (Number(e.id) === Number(action.payload)) {
                    checker.push(e)
                }
            })
            const newState = [...state]
            if (checker.length > 1) {
                const index = state.indexOf(checker[0])
                if (index > -1) {
                    newState.splice(index, 1)
                    return newState
                } else return newState
            } else return newState.filter(e => Number(e.id) !== Number(action.payload))
        default:
            return state

    }
}