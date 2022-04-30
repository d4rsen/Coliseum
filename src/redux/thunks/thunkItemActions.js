import { ACTION_buyItem, ACTION_deleteItem } from '../actions/auctionActions'
import { ACTION_deleteItemFromInventory } from '../actions/itemActions'
import $apiAuc from '../services/axios.auction.service'
import $apiDb from '../services/axios.db.service'
import { THUNK_getAllAuctionItems } from './thunkGetAllAuctionItemsAction'

export const THUNK_buyItem = ({id, buyer_id}) => async (dispatch) => {
    try {
        const response = await $apiAuc.post('/buy-item', {id, buyer_id})
        if (response.data.id) {
            dispatch(ACTION_deleteItem(id))
            dispatch(ACTION_buyItem(response.data))
            dispatch(THUNK_getAllAuctionItems())
        }
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_deleteItemFromInventory = (itemId, characterId) => async (dispatch) => {
    try {
        await $apiDb.post('/remove-from-inventory', {itemId, characterId})
        dispatch(ACTION_deleteItemFromInventory(itemId))
    } catch (e) {
        console.log(e)
    }
}
