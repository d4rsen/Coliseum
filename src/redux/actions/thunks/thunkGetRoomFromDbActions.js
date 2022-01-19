import $apiDb from '../../services/axiosServiceDb'
import { setLoader, unSetLoader } from '../loaderActions'
import { ACTION_setRoom } from '../roomActions'

export const THUNK_ACTION_getRoomFromDb = (id) => async (dispatch) => {
    try {
        dispatch(setLoader())
        const response = await $apiDb.post('/post-battle-room', {id})
        dispatch(ACTION_setRoom({id: response.data.id}))
        dispatch(unSetLoader())
    } catch (e) {
        console.log(e)
    }
}
