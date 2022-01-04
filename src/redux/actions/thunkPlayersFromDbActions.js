import axios from 'axios'
import { ACTION_getEnemyPlayer } from './enemyPlayerActions'
import { setLoader, unSetLoader } from './loaderActions'
import { ACTION_getPlayer } from './playerActions'

export const THUNK_ACTION_getPlayerFromDb = () => async (dispatch) => {
  dispatch(setLoader())
  try {
    const response = await axios.get(
      `https://dbforgame.herokuapp.com/get-specific-equipment/1`,
      {
        withCredentials: true,
      }
    )
    dispatch(ACTION_getPlayer(response.data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(unSetLoader())
  }
}
export const THUNK_ACTION_getEnemyPlayerFromDb = () => async (dispatch) => {
  dispatch(setLoader())
  try {
    const response = await axios.get(
      `https://dbforgame.herokuapp.com/get-specific-equipment/2`,
      {
        withCredentials: true,
      }
    )
    dispatch(ACTION_getEnemyPlayer(response.data))
  } catch (e) {
    console.log(e)
  } finally {
    dispatch(unSetLoader())
  }
}