import { BUY_ITEM } from '../types/auctionTypes'

export const buyItemAction = (item) => ({
    type: BUY_ITEM,
    payload: item
})
