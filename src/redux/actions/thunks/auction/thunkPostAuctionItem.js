import axios from 'axios'
import { postAuctionItem } from '../../auction/postAuctionItem'

export const thunkPostAuctionItem = (data) => async (dispatch) => {
    console.log(data)
    await axios.post('http://localhost:4000/auction/place-lot',
        {data})
    dispatch(postAuctionItem(data))
}

//  'http://localhost:4000/auction/place-lot'

//  'https://dbforgame.herokuapp.com/auction/place-lot'