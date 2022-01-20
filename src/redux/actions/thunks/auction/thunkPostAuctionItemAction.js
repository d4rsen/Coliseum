import $apiAuc from '../../../services/axiosServiceAuction'
import { postAuctionItem } from '../../auction/postAuctionItem'
import { deleteItemFromInventoryAction } from '../../inventory/deleteItemFromInventoryAction'

export const thunkPostAuctionItemAction = (data) => async (dispatch) => {
    console.log('HEREEEEEEEEEEE!', data)
    const response = await $apiAuc.post('/place-lot',
        // https://dbforgame.herokuapp.com/auction/place-lot
        {data})
    dispatch(postAuctionItem(response.data))
    dispatch(deleteItemFromInventoryAction(data.item_id))
}

//  'http://localhost:4000/auction/place-lot'

//  'https://dbforgame.herokuapp.com/auction/place-lot'