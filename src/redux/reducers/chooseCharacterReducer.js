import initialState from '../init/initial.state'
import { SET_PLAYER_CLASS } from '../types/playerTypes'

export const chooseCharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_CLASS :
            return {...action.payload}
        default:
            return state
    }
}
