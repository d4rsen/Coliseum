import axios from 'axios'

export const THUNK_ACTION_wearItemAction = (player, item) => async (dispatch) => {
    await axios.post('https://dbforgame.herokuapp.com/inventory/set-to-equip', {player, item})
}