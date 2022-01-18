import { SET_PLAYER_INVENTORY } from '../types/playerInventoryTypes'

export const ACTION_setPLayerInventory = (playerItems) => {
    return {
        type: SET_PLAYER_INVENTORY,
        payload: playerItems
    }
}