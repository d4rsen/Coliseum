import { ACTION_addRandomItem } from '../actions/itemActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_addRandomItem = (id) => async (dispatch) => {
    try {
        const item = await $apiDb.post('/post-random-item', {id})
        dispatch(ACTION_addRandomItem(item.data))
    } catch (e) {
        console.log(e)
    }
}
