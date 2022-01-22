import $apiAuc from '../../../services/axiosServiceAuction'
import { postAuctionItem } from '../../auction/postAuctionItem'
import { deleteItemFromInventoryAction } from '../../inventory/deleteItemFromInventoryAction'

export const thunkPostAuctionItemAction = (data) => async (dispatch) => {
    const response = await $apiAuc.post('/place-lot',
        {data})
    dispatch(postAuctionItem(response.data))
    dispatch(deleteItemFromInventoryAction(data.item_id))
}
