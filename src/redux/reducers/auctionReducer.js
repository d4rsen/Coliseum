import initialState from '../init/initial.state'
import { DELETE_ITEM, FILTER_ITEMS, GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM } from '../types/auctionTypes'

export const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUCTION_ITEM:
            return [...state, action.payload.data]
        case DELETE_ITEM:
            return state.filter(e => Number(e.auction_id) !== Number(action.payload))
        case FILTER_ITEMS:
            return action.payload
        case GET_ALL_AUC_ITEMS:
            return action.payload

        default:
            return state
    }
}
