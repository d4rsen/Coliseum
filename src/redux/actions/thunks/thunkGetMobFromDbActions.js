import $apiDb from '../../services/axiosServiceDb'
import { ACTION_getMobs } from '../mobsActions'

export const THUNK_ACTION_getMobFromDb = (id) => async (dispatch) => {
    try {
        const response = await $apiDb.get('get-mob-current-lvl/1')
        dispatch(ACTION_getMobs(response.data))
    } catch (e) {
        console.log(e)
    }
}