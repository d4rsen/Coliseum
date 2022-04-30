import { ACTION_setTraderItems, getAllAuctionItemsAction } from '../actions/auctionActions'
import $apiAuc from '../services/axios.auction.service'

export const THUNK_getAllAuctionItems = () => async (dispatch) => {
    const response = await $apiAuc.get('/')
    const allAucItems = response.data.allItems
    dispatch(getAllAuctionItemsAction(allAucItems))
}

export const THUNK_getTraderItems = () => async (dispatch) => {
    const response = await $apiAuc.post('/merchant-for-sale')
    dispatch(ACTION_setTraderItems(response.data))
}
