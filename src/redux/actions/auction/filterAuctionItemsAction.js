import {FILTER_ITEMS} from "../../types/auctionTypes";

export const filterAuctionItemsAction = (arr) => {
    return {
        type: FILTER_ITEMS,
        payload: arr
    }
}