import axios from 'axios'
import { unSetLoader } from '../loaderActions'
import { THUNK_ACTION_getPLayerInventory } from './thunkGetPlayerInventoryActions'

export const THUNK_ACTION_wearItemAction = (player, item) => async (dispatch) => {
    try {
        await axios.post('https://dbforgame.herokuapp.com/inventory/set-to-equip', {player, item})
        await THUNK_ACTION_getPLayerInventory(player.id)
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
