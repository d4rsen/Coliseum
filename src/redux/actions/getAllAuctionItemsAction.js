import { GET_ALL_AUC_ITEMS } from '../types/auctionTypes'

export const getAllAuctionItemsAction = (items) => ({
    type: GET_ALL_AUC_ITEMS,
    payload: items
})
