import { ACTION_postAuctionItem } from '../actions/auctionActions'
import { ACTION_deleteItemFromInventory } from '../actions/itemActions'
import $apiAuc from '../services/axios.auction.service'

export const THUNK_postAuctionItem = (data) => async (dispatch) => {
    const response = await $apiAuc.post('/place-lot',
        {data})
    dispatch(ACTION_postAuctionItem(response.data))
    dispatch(ACTION_deleteItemFromInventory(data.item_id))
}
