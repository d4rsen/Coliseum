import { ADD_RANDOM_ITEM } from '../types/playerInventoryTypes'

export const addRandomItemAction = (item) => ({
    type: ADD_RANDOM_ITEM,
    payload: item
})
