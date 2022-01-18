import { DELETE_ITEM_FROM_INVENTORY } from '../../types/playerInventoryTypes'

export const deleteItemFromInventoryAction = (itemId) => {
    // console.log('AAAAAAAAAAAACTION')
    return {
        type: DELETE_ITEM_FROM_INVENTORY,
        payload: itemId
    }
}