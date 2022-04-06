import axios from 'axios'
import { filterAuctionItemsAction } from '../filterAuctionItemsAction'

export const thunkFilterItemsAction = (value) => async (dispatch) => {
    const response = await axios.post('https://dbforgame.herokuapp.com/auction/filter-items',
        {value})
    dispatch(filterAuctionItemsAction(response.data))
}
