import $apiDb from '../../services/axiosServiceDb'
import { ACTION_getMob } from '../mobsActions'

export const THUNK_ACTION_getMobFromDb = (id) => async (dispatch) => {
    try {
        const response = await $apiDb.get(`/get-mob-current-lvl/${id}`) //TODO
        console.log(response.data)
        dispatch(ACTION_getMob(response.data))
    } catch (e) {
        console.log(e)
    }
}