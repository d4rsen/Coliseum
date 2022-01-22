import axios from 'axios'
import { SET_TRADER_ITEMS } from '../../../types/auctionTypes'
import { getAllAuctionItems } from '../../auction/getAllAuctionItems'

export const thunkGetAllAuctionItemsAction = () => async (dispatch) => {
    const response = await axios.get('https://dbforgame.herokuapp.com/auction')
    const allAucItems = response.data.allItems
    dispatch(getAllAuctionItems(allAucItems))
}

export const THUNK_ACTION_getTraderItems = () => async (dispatch) => {
    const response = await axios.post('https://dbforgame.herokuapp.com/auction/merchant-for-sale')
    dispatch({type: SET_TRADER_ITEMS, payload: response.data})
}
