import { GET_ALL_AUC_ITEMS } from '../../types/auctionTypes'

export const getAllAuctionItems = (items) => {
    return {
        type: GET_ALL_AUC_ITEMS,
        payload: items
    }
}