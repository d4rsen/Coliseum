import { DELETE_ITEM } from '../../types/auctionTypes'

export const deleteItemAction = (auction_id) => {
    return {
        type: DELETE_ITEM,
        payload: auction_id
    }
}