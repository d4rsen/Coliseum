import $apiAuc from '../../services/axiosServiceAuction'
import { deleteItemFromInventoryAction } from '../deleteItemFromInventoryAction'
import { postAuctionItemAction } from '../postAuctionItemAction'

export const thunkPostAuctionItemAction = (data) => async (dispatch) => {
    const response = await $apiAuc.post('/place-lot',
        {data})
    dispatch(postAuctionItemAction(response.data))
    dispatch(deleteItemFromInventoryAction(data.item_id))
}
