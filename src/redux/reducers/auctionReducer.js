import {GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM} from '../types/auctionTypes'
import initialState from "../init/initialState";

export const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUCTION_ITEM:
            console.log(action.payload)
            return state

        case GET_ALL_AUC_ITEMS:
            console.log(action.payload)
            return action.payload

        default:
            return state
    }
}
