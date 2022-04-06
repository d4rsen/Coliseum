import { SET_PLAYER_INVENTORY } from '../types/playerInventoryTypes'

export const ACTION_setPLayerInventory = (playerItems) => ({
    type: SET_PLAYER_INVENTORY,
    payload: playerItems
})
