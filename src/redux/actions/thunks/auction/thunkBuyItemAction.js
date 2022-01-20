import axios from 'axios'
import { buyItemAction } from '../../auction/buyItemAction'
import { deleteItemAction } from '../../auction/deleteItemAction'
import { thunkGetAllAuctionItemsAction } from './thunkGetAllAuctionItemsAction'

export const thunkBuyItemAction = ({id, buyer_id}) => async (dispatch) => {
    const response = await axios.post('https://dbforgame.herokuapp.com/auction/buy-item',
        {id, buyer_id})
    console.log(response)
    if (response.data.id) {
        dispatch(deleteItemAction(id))
        dispatch(buyItemAction(response.data))
        dispatch(thunkGetAllAuctionItemsAction())
    }
}