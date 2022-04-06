import { POST_AUCTION_ITEM } from '../types/auctionTypes'

export const postAuctionItemAction = (data) => ({
    type: POST_AUCTION_ITEM,
    payload: {data}
})
