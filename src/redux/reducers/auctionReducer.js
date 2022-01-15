import initialState from '../init/initialState'
import { GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM } from '../types/auctionTypes'

export const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUCTION_ITEM:
            console.log(action.payload)
            return [...state, action.payload]

        case GET_ALL_AUC_ITEMS:
            console.log(action.payload)
            return action.payload

        default:
            return state
    }
}
