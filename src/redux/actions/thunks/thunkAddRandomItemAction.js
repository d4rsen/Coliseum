import axios from 'axios'
import { addRandomItemAction } from '../addRandomItemAction'

export const thunkAddRandomItemAction = (id) => async (dispatch) => {
    const item = await axios.post('https://dbforgame.herokuapp.com/db/post-random-item',
        {id})
    dispatch(addRandomItemAction(item.data))
}
