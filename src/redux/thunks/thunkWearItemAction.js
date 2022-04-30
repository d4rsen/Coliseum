import axios from 'axios'
import { ACTION_unSetLoader } from '../actions/loaderActions'
import { THUNK_getPLayerInventory } from './thunkGetPlayerInventoryActions'

export const THUNK_wearItemAction = (player, item) => async (dispatch) => {
    try {
        await axios.post('https://dbforgame.herokuapp.com/inventory/set-to-equip', {player, item})
        await THUNK_getPLayerInventory(player.id)
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
