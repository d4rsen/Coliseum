import initialState from '../init/initialState'
import { SET_PLAYER_INVENTORY } from '../types/playerInventoryTypes'

export const playerInventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_INVENTORY:
            const temp = state.slice()
            let flag = true
            for (let i = 0; i < action.payload.length; i += 1) {
                if (temp[i]?.item_name !== action.payload[i]?.item_name) {
                    console.log(flag)
                    flag = false
                }
            }
            if (flag) {
                const playerItems = action.payload
                playerItems.forEach(e => {
                    temp.unshift(e)
                    temp.pop()
                })
                return state
            } else return action.payload

        default:
            return state

    }
}