import axios from 'axios'
import { ACTION_filterAuctionItems } from '../actions/auctionActions'

export const THUNK_filterItems = (value) => async (dispatch) => {
    const response = await axios.post('https://dbforgame.herokuapp.com/auction/filter-items',
        {value})
    dispatch(ACTION_filterAuctionItems(response.data))
}
