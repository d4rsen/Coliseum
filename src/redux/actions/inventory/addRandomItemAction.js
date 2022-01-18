import { ADD_RANDOM_ITEM } from '../../types/playerInventoryTypes'

export const addRandomItemAction = (item) => {
    return {
        type: ADD_RANDOM_ITEM,
        payload: item
    }
}