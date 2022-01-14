import initialState from "../init/initialState";
import {GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM} from "../types/auctionTypes";

export const auctionReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case POST_AUCTION_ITEM:
            return [...state, action.payload]

        case GET_ALL_AUC_ITEMS:
            return action.payload

        default:
            return state
    }
}