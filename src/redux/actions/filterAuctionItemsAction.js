import { FILTER_ITEMS } from '../types/auctionTypes'

export const filterAuctionItemsAction = (arr) => ({
    type: FILTER_ITEMS,
    payload: arr
})
