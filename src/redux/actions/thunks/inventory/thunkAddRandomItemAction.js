import axios from "axios";
import {addRandomItemAction} from "../../inventory/addRandomItemAction";

export const thunkAddRandomItemAction = (id) => async (dispatch) => {
    console.log('ID FROM THUNK: ', id)
    const item = await axios.post('https://dbforgame.herokuapp.com/db/post-random-item',
        {id})
    console.log('NEW INVENTORY ===>', item)
    dispatch(addRandomItemAction(item.data))
}