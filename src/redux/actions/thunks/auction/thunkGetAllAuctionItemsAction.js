import axios from 'axios'
import {getAllAuctionItems} from '../../auction/getAllAuctionItems'

export const thunkGetAllAuctionItemsAction = () => async (dispatch) => {
    console.log('thunkGetAllAuctionItemsAction')
    const response = await axios.get('https://dbforgame.herokuapp.com/auction')
    const allAucItems = response.data.allItems
    console.log(allAucItems)
    dispatch(getAllAuctionItems(allAucItems))
}

//    'https://dbforgame.herokuapp.com/auction'    'http://localhost:4000/auction'