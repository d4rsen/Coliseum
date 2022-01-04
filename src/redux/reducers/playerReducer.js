import initialState from '../state/initialState'
import {
    PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER,
    PUNCH_FROM_MOB_TO_PLAYER,
    REGENERATE,
    SET_PLAYER,
    UNSET_PLAYER
} from '../types/playerTypes'

export const playerReducer = (state = initialState, action) => {
  const player = {...state}
  const random = Math.floor(Math.random() * 100)
  const chance = (characterEvasion) => characterEvasion > random

  switch (action.type) {
    case SET_PLAYER:
      return action.payload

    case UNSET_PLAYER:
      return null

    case PUNCH_FROM_MOB_TO_PLAYER:
      const dmg = player.hp - action.payload / player.total_stats.def
      const staminaLess = player.ap - 1
      if (chance(player.evs)) {
        console.log(`${player.nickName} уклонился !`)
        return {...state, ap: staminaLess}
      } else {
        return {...state, hp: dmg, ap: staminaLess}
      }
    case PUNCH_FROM_ENEMY_PLAYER_TO_PLAYER:
      const dmg2 = player.hp - action.payload / player.total_stats.def
      const staminaLess2 = player.ap - 1
      if (chance(player.total_stats.evs)) {
        console.log(`${player.nickName} уклонился !`)
        return {...state, ap: staminaLess2}
      } else {
        return {...state, hp: dmg2, ap: staminaLess2}
      }
    case REGENERATE:
      const temp = state.hp + 1
      const temp2 = state.ap + 1
      if (state.hp < 100) {
        return {...state, hp: temp, ap: temp2}
      }
      return state

    default:
      return state
  }
}

