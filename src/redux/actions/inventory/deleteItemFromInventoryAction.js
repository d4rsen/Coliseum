import { DELETE_ITEM_FROM_INVENTORY } from '../../types/playerInventoryTypes'

export const deleteItemFromInventoryAction = (itemId) => {
    return {
        type: DELETE_ITEM_FROM_INVENTORY,
        payload: itemId
    }
}