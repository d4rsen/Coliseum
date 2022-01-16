import axios from 'axios'
import {getAllAuctionItems} from '../../auction/getAllAuctionItems'

export const thunkGetAllAuctionItems = () => async (dispatch) => {
    console.log('thunkGetAllAuctionItems')
    const response = await axios.get('http://localhost:4000/auction')
    const allAucItems = response.data.allItems
    console.log(allAucItems)
    dispatch(getAllAuctionItems())
}

//    'https://dbforgame.herokuapp.com/auction'    'http://localhost:4000/auction'