import { combineReducers } from 'redux'
import { allRoomsReducer } from '../allRoomsReducer'
import { battleEnemyPlayerReducer } from '../battleEnemyPlayerReducer'
import { battlePlayerReducer } from '../battlePlayerReducer'
import { chatReducer } from '../chatReducer'
import { chooseCharacterReducer } from '../chooseCharacterReducer'
import { enemyPlayerReducer } from '../EnemyPlayerReducer'
import { isAuthReducer } from '../isAuthReducer'
import { loaderReducer } from '../loaderReducer'
import { mannequinReducer } from '../mannequinReducer'
import { mobsReducer } from '../mobsReducer'
import { playerInventoryReducer } from '../playerInventoryReducer'
import { playerReducer } from '../playerReducer'
import { roomReducer } from '../roomReducer'
import { userReducer } from '../userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    isLoading: loaderReducer,
    isAuth: isAuthReducer,
    chat: chatReducer,
    mobs: mobsReducer,
    player: playerReducer,
    playerInventory: playerInventoryReducer,
    enemyPlayer: enemyPlayerReducer,
    battlePlayer: battlePlayerReducer,
    battleEnemyPlayer: battleEnemyPlayerReducer,
    room: roomReducer,
    allRooms: allRoomsReducer,
    chooseCharacter: chooseCharacterReducer,
    mannequin: mannequinReducer,
})
