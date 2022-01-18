import { SET_PHRASE } from '../types/phraseTypes'

export const ACTION_setPhrase = (phrase) => {
    return {
        type: SET_PHRASE,
        payload: phrase
    }
}