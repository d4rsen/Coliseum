import initialState from '../init/initialState'
import {ADD_RANDOM_ITEM, DELETE_ITEM_FROM_INVENTORY, SET_PLAYER_INVENTORY} from '../types/playerInventoryTypes'

export const playerInventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_INVENTORY:
            console.log('ACTION PAYLOAD', action.payload)
            if (action.payload.length) {
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
            } else return state
        case ADD_RANDOM_ITEM:
            return [...state, action.payload]
        case DELETE_ITEM_FROM_INVENTORY:
            console.log('DELETE INIT')
            const checker = state.every(e => Number(e.id) === Number(action.payload))
            const newState = [...state]
            if (checker.length > 1) {
                const index = state.indexOf(checker[0])
                if (index > -1) {
                    newState.splice(index, 1)
                    return newState
                } else return newState
            } else return newState.filter(e => Number(e.id) !== Number(action.payload))
        default:
            return state

    }
}