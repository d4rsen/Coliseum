import {
    BUY_ITEM,
    DELETE_ITEM,
    FILTER_ITEMS,
    GET_ALL_AUC_ITEMS,
    POST_AUCTION_ITEM,
    SET_TRADER_ITEMS
} from '../types/auctionTypes'

export const ACTION_filterAuctionItems = (arr) => ({
    type: FILTER_ITEMS,
    payload: arr
})

export const getAllAuctionItemsAction = (items) => ({
    type: GET_ALL_AUC_ITEMS,
    payload: items
})

export const ACTION_buyItem = (item) => ({
    type: BUY_ITEM,
    payload: item
})

export const ACTION_deleteItem = (auction_id) => ({
    type: DELETE_ITEM,
    payload: auction_id
})

export const ACTION_postAuctionItem = (data) => ({
    type: POST_AUCTION_ITEM,
    payload: {data}
})

export const ACTION_setTraderItems = (items) => ({
    type: SET_TRADER_ITEMS,
    payload: items
})
