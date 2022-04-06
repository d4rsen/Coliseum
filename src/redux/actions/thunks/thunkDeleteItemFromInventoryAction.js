import axios from 'axios'
import { deleteItemFromInventoryAction } from '../deleteItemFromInventoryAction'

export const thunkDeleteItemFromInventoryAction = (itemId, characterId) => async (dispatch) => {
    const response = await axios.post('https://dbforgame.herokuapp.com/db/remove-from-inventory',
        {itemId, characterId})
    dispatch(deleteItemFromInventoryAction(itemId))
}
