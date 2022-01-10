import initialState from '../init/initialState'
import { SET_PLAYER_CLASS } from '../types/playerTypes'

export const chooseCharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_CLASS :
            return {...action.payload}

        default:
            return state
    }
}