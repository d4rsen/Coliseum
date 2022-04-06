import { DELETE_ITEM } from '../types/auctionTypes'

export const deleteItemAction = (auction_id) => ({
    type: DELETE_ITEM,
    payload: auction_id
})
