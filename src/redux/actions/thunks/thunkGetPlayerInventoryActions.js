import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setPLayerInventory } from '../playerInventoryActions'

export const THUNK_ACTION_getPLayerInventory = (playerId) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.get(`/get-specific-inventory/${playerId}`)
        // const response = await $apiDb.get(`/get-specific-inventory/1`)
        dispatch(ACTION_setPLayerInventory(response.data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(unSetLoader())
    }
}