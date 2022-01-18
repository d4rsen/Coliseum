import { combineReducers } from 'redux'
import { allRoomsReducer } from '../allRoomsReducer'
import { auctionReducer } from '../auctionReducer'
import { battleEnemyPlayerReducer } from '../battleEnemyPlayerReducer'
import { battlePlayerReducer } from '../battlePlayerReducer'
import { chatReducer } from '../chatReducer'
import { chooseCharacterReducer } from '../chooseCharacterReducer'
import { enemyPlayerReducer } from '../EnemyPlayerReducer'
import { evasionReducer } from '../evasionReducer'
import { isAuthReducer } from '../isAuthReducer'
import { loaderReducer } from '../loaderReducer'
import { mannequinReducer } from '../mannequinReducer'
import { mobsReducer } from '../mobsReducer'
import { phraseReducer } from '../phraseReducer'
import { playerInventoryReducer } from '../playerInventoryReducer'
import { playerReducer } from '../playerReducer'
import { roomReducer } from '../roomReducer'
import { userReducer } from '../userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    mobs: mobsReducer,
    room: roomReducer,
    player: playerReducer,
    phrase: phraseReducer,
    isAuth: isAuthReducer,
    evasion: evasionReducer,
    isLoading: loaderReducer,
    allRooms: allRoomsReducer,
    mannequin: mannequinReducer,
    auctionItems: auctionReducer,
    enemyPlayer: enemyPlayerReducer,
    battlePlayer: battlePlayerReducer,
    chooseCharacter: chooseCharacterReducer,
    playerInventory: playerInventoryReducer,
    battleEnemyPlayer: battleEnemyPlayerReducer,
})
