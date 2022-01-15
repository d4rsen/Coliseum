import InitialState from '../init/initialState'
import {GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM} from '../types/auctionTypes'

<<<<<<< Updated upstream
export const auctionReducer = (state = initialState, action) => {
=======
export const auctionReducer = (state = InitialState, action) => {
    console.log(action.payload)
>>>>>>> Stashed changes
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
