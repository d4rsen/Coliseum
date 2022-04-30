import { ACTION_getMob } from '../actions/mobsActions'
import $apiDb from '../services/axios.db.service'

export const THUNK_getMobFromDb = (id) => async (dispatch) => {
    try {
        const response = await $apiDb.get(`/get-mob-current-lvl/${id}`)
        dispatch(ACTION_getMob(response.data))
    } catch (e) {
        console.log(e)
    }
}
