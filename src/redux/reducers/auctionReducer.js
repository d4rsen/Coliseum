import {GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM} from '../types/auctionTypes'
import initialState from "../init/initialState";

export const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUCTION_ITEM:
            // console.log(action.payload)
            return [...state, action.payload.data]
        // console.log('POST INIT')
        // const checker = state.every(e => Number(e.id) === Number(action.payload))
        // const newState = [...state]
        // if (checker.length > 1) {
        //     const index = state.indexOf(checker[0])
        //     if (index > -1) {
        //         newState.splice(index, 1)
        //         return newState
        //     } else return newState
        // } else return newState.filter(e => Number(e.id) !== Number(action.payload))

        case GET_ALL_AUC_ITEMS:
            console.log(action.payload)
            return action.payload


        default:
            return state
    }
}
