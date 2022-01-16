import {POST_AUCTION_ITEM} from '../../types/auctionTypes'

export const postAuctionItem = (data) => {
    return {
        type: POST_AUCTION_ITEM,
        payload: data
    }
}