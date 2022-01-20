import { BUY_ITEM } from '../../types/auctionTypes'

export const buyItemAction = (item) => {
    return {
        type: BUY_ITEM,
        payload: item
    }
}