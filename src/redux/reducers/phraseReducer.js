import initialState from '../init/initialState'
import { SET_PHRASE, UNSET_PHRASE } from '../types/phraseTypes'

export const phraseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PHRASE :
            return action.payload
        case UNSET_PHRASE :
            return null
        default:
            return state
    }
}
