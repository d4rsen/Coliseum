import { SET_WATCH_BATTLE_PLAYERS } from '../types/watchBattleTypes'

export const ACTION_setWatchBattlePlayers = (wsPlayers) => {
    return {
        type: SET_WATCH_BATTLE_PLAYERS,
        payload: wsPlayers
    }
}