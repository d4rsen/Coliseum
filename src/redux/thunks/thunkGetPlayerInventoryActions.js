import axios from 'axios'
import { ACTION_unSetLoader } from '../actions/loaderActions'
import { ACTION_setPLayerInventory } from '../actions/playerInventoryActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_getPLayerInventory = (playerId) => async (dispatch) => {
    try {
        const response = await $apiDb.get(`/get-specific-inventory/${playerId}`)
        dispatch(ACTION_setPLayerInventory(response.data))
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}

export const THUNK_buyTraderItem = (player, item) => async (dispatch) => {
    try {
        await axios.post(`https://dbforgame.herokuapp.com/inventory/add-item`, {player, item}, {
            withCredentials: true
        })
        await THUNK_getPLayerInventory(player.id)
        dispatch(ACTION_unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
