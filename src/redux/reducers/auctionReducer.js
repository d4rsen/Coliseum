import initialState from '../init/initialState'
import { DELETE_ITEM, FILTER_ITEMS, GET_ALL_AUC_ITEMS, POST_AUCTION_ITEM } from '../types/auctionTypes'

export const auctionReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_AUCTION_ITEM:
            console.log(action.payload)
            return [...state, action.payload.data]
        case DELETE_ITEM:
            console.log('DELETER', action.payload)
            return state.filter(e => Number(e.auction_id) !== Number(action.payload))
        case FILTER_ITEMS:
            return action.payload
        case GET_ALL_AUC_ITEMS:
            console.log(action.payload)
            return action.payload

        default:
            return state
    }
}

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
