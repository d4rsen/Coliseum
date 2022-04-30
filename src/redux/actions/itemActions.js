import { ADD_RANDOM_ITEM, DELETE_ITEM_FROM_INVENTORY } from '../types/playerInventoryTypes'

export const ACTION_addRandomItem = (item) => ({
    type: ADD_RANDOM_ITEM,
    payload: item
})

export const ACTION_deleteItemFromInventory = (itemId) => ({
    type: DELETE_ITEM_FROM_INVENTORY,
    payload: itemId
})
