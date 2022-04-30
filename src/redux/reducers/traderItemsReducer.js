import initialState from '../init/initial.state'
import { SET_TRADER_ITEMS, UNSET_TRADER_ITEMS } from '../types/auctionTypes'

export const traderItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRADER_ITEMS :
            return action.payload
        case UNSET_TRADER_ITEMS :
            return null
        default:
            return state
    }
}
