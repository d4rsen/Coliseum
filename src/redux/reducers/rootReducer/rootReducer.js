import { combineReducers } from 'redux'
import { activeRoomsReducer } from '../activeRoomsReducer'
import { auctionReducer } from '../auctionReducer'
import { battleEnemyPlayerReducer } from '../battleEnemyPlayerReducer'
import { battlePlayerReducer } from '../battlePlayerReducer'
import { chatReducer } from '../chatReducer'
import { chooseCharacterReducer } from '../chooseCharacterReducer'
import { enemyPlayerReducer } from '../EnemyPlayerReducer'
import { evasionReducer } from '../evasionReducer'
import { idleRoomsReducer } from '../idleRoomsReducer'
import { isAuthReducer } from '../isAuthReducer'
import { loaderReducer } from '../loaderReducer'
import { mannequinReducer } from '../mannequinReducer'
import { mobReducer } from '../mobReducer'
import { phraseReducer } from '../phraseReducer'
import { playerInventoryReducer } from '../playerInventoryReducer'
import { playerReducer } from '../playerReducer'
import { roomReducer } from '../roomReducer'
import { userReducer } from '../userReducer'
import { watchBattleReducer } from '../watchBattleReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    mob: mobReducer,
    room: roomReducer,
    player: playerReducer,
    phrase: phraseReducer,
    isAuth: isAuthReducer,
    evasion: evasionReducer,
    isLoading: loaderReducer,
    idleRooms: idleRoomsReducer,
    mannequin: mannequinReducer,
    auctionItems: auctionReducer,
    enemyPlayer: enemyPlayerReducer,
    activeRooms: activeRoomsReducer,
    watchBattle: watchBattleReducer,
    battlePlayer: battlePlayerReducer,
    chooseCharacter: chooseCharacterReducer,
    playerInventory: playerInventoryReducer,
    battleEnemyPlayer: battleEnemyPlayerReducer,
})
